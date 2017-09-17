require('dotenv').config({path: '.env.local'});

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./src/server/logger');
const githubOAuth = require('./src/server/github');
const model = require('./src/server/model');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use('/static', express.static('build/static'));
app.use(['*.json', '*.ico', '*.js'], express.static('build'));

// TODO token authentication middleware

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/login/github', (req, res) => {
    return githubOAuth.login(req, res);
});

app.get('/github/callback', (req, res) => {
    githubOAuth.callback(req, res);
});

app.listen(80, () => {
    logger.log('info', 'Listening on port 80');
});
