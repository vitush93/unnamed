import React, {Component} from 'react';
import {Container, Divider, Grid, Icon} from 'semantic-ui-react'
import SearchBox from './SearchBox';
import './App.css';
import SearchResults from "./SearchResults";

const tags = [
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

const resources = [
    {
        id: 1,
        title: 'Installing nginx + PHP-FPM on Ubuntu 16.04',
        icon: 'linkify',
        extra: 'https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04',
        tags: [tags[2], tags[0], tags[1]]
    },
    {
        id: 2,
        title: 'Configuring nginx as php-fpm proxy',
        icon: 'file text',
        extra: 'last updated on <strong>Jan 8 2017</strong>',
        tags: [tags[0], tags[1]]
    },
    {
        id: 3,
        title: 'PHP-FPM with nginx Dockerfile',
        icon: 'github',
        extra: '<strong>richarvey/nginx-php-fpm</strong>, last commit on <strong>Apr 21 2015</strong>',
        tags: [tags[0], tags[1], tags[3]]
    },
    {
        id: 4,
        title: 'A Complete NGINX Tutorial',
        icon: 'youtube play',
        extra: 'published on <strong>Jan 1 2012</strong>, duration <strong>12:02</strong>',
        tags: [tags[0], tags[4]]
    },
    {
        id: 5,
        title: 'Some tutorial on Gist',
        icon: 'github',
        extra: 'Gist last updated on <strong>Aug 29 2017</strong>',
        tags: [tags[0], tags[4]]
    }
];

class App extends Component {
    render() {
        return (
            <Container>

                <header id="header">
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <a href="">
                                    <Icon name="find" size="big"/>&nbsp;&nbsp;
                                    <h4 style={{display: 'inline-block'}}>Oculare</h4>
                                </a>
                            </Grid.Column>
                            <Grid.Column textAlign="right">
                                <nav id="top-nav">
                                    <ul>
                                        <li><a href="">wtf?!</a></li>
                                        <li><a href="">sign in with <Icon name="github"/> </a></li>
                                    </ul>
                                </nav>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </header>

                <Grid columns={1}>

                    <Grid.Row>
                        <Grid.Column>
                            <SearchBox/>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider hidden/>

                    <Grid.Row>
                        <Grid.Column>
                            <SearchResults resources={resources}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default App;
