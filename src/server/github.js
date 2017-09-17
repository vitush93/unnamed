const logger = require('./logger');
const model = require('./model');
const GitHubApi = require("github");
const github = new GitHubApi({
    debug: true,
    Promise: require('bluebird')
});

const githubOAuth = require('github-oauth')({
    githubClient: process.env.GITHUB_CLIENT_ID,
    githubSecret: process.env.GITHUB_SECRET_ID,
    baseURL: 'http://localhost',
    loginURI: '/github/login',
    callbackURI: '/github/callback',
    scope: 'user' // optional, default scope is set to user
});

githubOAuth.on('error', function (err) {
    console.error('there was a login error', err);
});

githubOAuth.on('token', function (accessToken, serverResponse) {
    if (accessToken.error) {
        logger.log('error', accessToken.error);

        return;
    }

    // got access token - send response
    const querystring = require('querystring');
    const query = querystring.stringify({ // TODO also send username & avatar
        token: accessToken.access_token
    });

    serverResponse.redirect('/?' + query);

    github.authenticate({
        type: "oauth",
        token: accessToken.access_token
    });

    github.users.get({}, (err, res) => {
        if (err) {
            logger.log('error', err);

            return;
        }

        const username = res.data.login;
        const email = res.data.email;
        const avatar = res.data.avatar_url;
        const token = accessToken.access_token;

        const q = model.User.findOne({username}).exec();

        q.then(user => {
            if (user) {
                // update user token
                user.token = token;
                user.save();
            } else {
                // create a new user
                user = new model.User({username, email, avatar, token});

                user.save(err => err && logger.log('error', err));
            }
        }).catch(err => logger.log('error', err));
    });
});


module.exports = githubOAuth;