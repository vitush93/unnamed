import React from 'react';
import {Divider, Grid} from "semantic-ui-react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import NewsFeed from "./NewsFeed";

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

const matchedTags = [tags[0], [tags][1]];

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            matchedTags: []
        };

        this.search = this.search.bind(this);
    }

    search(e) {
        const val = e.target.value;

        // TODO only for local data - refactor later
        if (val.length === 0) {
            this.setState({
                searchTerm: '',
                matchedTags: []
            });
        } else {
            this.setState({
                searchTerm: val,
                matchedTags: matchedTags
            });
        }
    }

    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <SearchBox onChange={this.search} matchedTags={this.state.matchedTags}/>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>
                        {(this.state.searchTerm.length > 0) ? <SearchResults resources={resources}/> : <NewsFeed/>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;