import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.tags = [
    {
        id: 1,
        name: 'nginx',
        count: 121
    },
    {
        id: 2,
        name: 'php',
        count: 78
    },
    {
        id: 3,
        name: 'server',
        count: 319
    },
    {
        id: 4,
        name: 'docker',
        count: 34
    },
    {
        id: 5,
        name: 'tutorial',
        count: 76
    }
];
window.resources = [
    {
        id: 1,
        title: 'Installing nginx + PHP-FPM on Ubuntu 16.04',
        icon: 'linkify',
        extra: 'https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04',
        tags: [window.tags[2], window.tags[0], window.tags[1]]
    },
    {
        id: 2,
        title: 'Configuring nginx as php-fpm proxy',
        icon: 'file text',
        extra: 'last updated on <strong>Jan 8 2017</strong>',
        tags: [window.tags[0], window.tags[1]]
    },
    {
        id: 3,
        title: 'PHP-FPM with nginx Dockerfile',
        icon: 'github',
        extra: '<strong>richarvey/nginx-php-fpm</strong>, last commit on <strong>Apr 21 2015</strong>',
        tags: [window.tags[0], window.tags[1], window.tags[3]]
    },
    {
        id: 4,
        title: 'A Complete NGINX Tutorial',
        icon: 'youtube play',
        extra: 'published on <strong>Jan 1 2012</strong>, duration <strong>12:02</strong>',
        tags: [window.tags[0], window.tags[4]]
    },
    {
        id: 5,
        title: 'Some tutorial on Gist',
        icon: 'github',
        extra: 'Gist last updated on <strong>Aug 29 2017</strong>',
        tags: [window.tags[0], window.tags[4]]
    }
];

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
