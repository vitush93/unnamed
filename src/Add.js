import React from 'react';
import {Button, Divider, Form, Grid, Message} from "semantic-ui-react";
import {withRouter} from 'react-router-dom';
import SearchBox from "./SearchBox";
import {isWebUri} from 'valid-url';
import _ from 'lodash';

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

        // TODO submit form
        console.log('Form submit');
    }

    render() {
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

                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input required label="Resource title" value={this.state.title}
                                            error={this.state.titleError}
                                            onChange={this.titleChanged.bind(this)} placeholder="short and apt title"/>
                                <Form.Input required label="Tags" value={this.state.tags} error={this.state.tagsError}
                                            onChange={this.tagsChanged.bind(this)} placeholder="#tag1 #tag2 #tag3"/>
                            </Form.Group>

                            <Button color="green" onClick={this.handleSubmit.bind(this)}>Submit resource</Button>
                            <Button color="red" onClick={this.handleCancelAdd.bind(this)}>Cancel</Button>
                        </Form>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default withRouter(Add);