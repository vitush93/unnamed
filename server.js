require('dotenv').config({path: '.env.local'});

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./src/server/logger');
const githubOAuth = require('./src/server/github');
const model = require('./src/server/model');
const path = require('path');
const Cache = require('./src/server/cache');
const cache = new Cache();


/**
 * Middleware for protected routes.
 *
 * Will compare token from X-Auth-Token header
 * against stored token in the database.
 *
 * @param req
 * @param res
 * @param next
 */
const authMiddleware = (req, res, next) => {
    const token = req.header('X-Auth-Token');

    if (!token) {
        next(new Error('Missing authentication token in X-Auth-Token header.'));

        return;
    }

    // load stored token from cache
    if (cache.has(token)) {
        next();

        return;
    }

    // lookup token in database
    const findUserByToken = model.User.findOne({token}).exec();
    findUserByToken.then(user => {
        if (user) {

            // store token in cache for a while
            cache.set(user.token, user.token, 1800);

            next();
        } else {
            next(new Error('Invalid token.'));
        }
    }).catch(err => err && next(err));
};


const app = express();
app.use(bodyParser.json());
app.use('/static', express.static('build/static'));
app.use(['*.json', '*.ico', '*.js'], express.static('build'));

/**
 * Home route.
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

/**
 * Github login.
 */
app.get('/login/github', (req, res) => {
    return githubOAuth.login(req, res);
});

/**
 * Github OAuth2 callback endpoint.
 */
app.get('/github/callback', (req, res) => {
    githubOAuth.callback(req, res);
});

/**
 * Add a new entry from form data.
 */
app.get('/api/v1/add', authMiddleware, (req, res) => {
    // TODO process form data
    res.send('works');
});

/**
 * Error handler.
 */
app.use(function (err, req, res, next) {
    logger.log('error', err);

    res.status(500);
    res.json({
        error: err.message
    });
});

app.listen(80, () => {
    logger.log('info', 'Listening on port 80');
});
