import React from 'react';
import {Button, Container, Divider, Form, Grid, Message} from "semantic-ui-react";
import {Link, withRouter} from 'react-router-dom';
import SearchBox from "./SearchBox";
import {isWebUri} from 'valid-url';
import _ from 'lodash';
import axios from "axios";
import api from "./api";
import Auth from "./Auth";

class Add extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: '',
            title: '',
            tags: '',
            titleError: false,
            tagsError: false,
            urlError: false
        };
    }

    componentDidMount() {
        if (_.has(window, 'searchBoxValue')) {
            this.setState({
                url: window.searchBoxValue
            }, () => delete window.searchBoxValue);
        }
    }

    searchBoxChanged(e) {
        const url = e.target.value;
        const urlError = !isWebUri(url);

        this.setState({url, urlError});
    }

    titleChanged(e) {
        this.setState({title: e.target.value, titleError: false})
    }

    tagsChanged(e) {
        this.setState({tags: e.target.value, tagsError: false});
    }

    handleCancelAdd(e) {
        e.preventDefault();

        this.props.history.push('/');
    }

    handleSubmit(e) {
        e.preventDefault();

        // validate URL again
        if (!isWebUri(this.state.url)) {
            alert('Please enter a valid URL.');

            return;
        }

        // TODO fetch site title from URL

        // prevent sending empty form
        const titleEmpty = this.state.title.length === 0;
        const tagsEmpty = this.state.tags.length === 0;

        if (titleEmpty) {
            this.setState({titleError: true});
        }

        if (tagsEmpty) {
            this.setState({tagsError: true});
        }

        if (titleEmpty || tagsEmpty) return;

        axios({
            method: 'post',
            url: api().add(),
            data: {
                url: this.state.url,
                title: this.state.title,
                tags: this.state.tags
            },
            headers: {
                'X-Auth-Token': Auth.token()
            }
        })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    render() {
        const isLoggedIn = Auth.isLoggedIn();

        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox value={this.state.url} onChange={this.searchBoxChanged.bind(this)}
                                       error={this.state.urlError}
                                       placeholder="url of the new resource"/>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>
                        {isLoggedIn ? (
                            <Form>
                                <Form.Group widths="equal">
                                    <Form.Input required label="Resource title" value={this.state.title}
                                                error={this.state.titleError}
                                                onChange={this.titleChanged.bind(this)} placeholder="short and apt title"/>
                                    <Form.Input required label="Tags" value={this.state.tags} error={this.state.tagsError}
                                                onChange={this.tagsChanged.bind(this)} placeholder="#tag1 #tag2 #tag3"/>
                                </Form.Group>
                                <Form.TextArea label="Describe your link (optional)"/>

                                <Button color="green" onClick={this.handleSubmit.bind(this)}>Submit resource</Button>
                                <Button color="red" onClick={this.handleCancelAdd.bind(this)}>Cancel</Button>
                            </Form>
                        ) : (
                            <Container textAlign="center">
                                <p>Please login first to post a new resource. Go <Link to="/">back</Link>.</p>
                            </Container>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default withRouter(Add);