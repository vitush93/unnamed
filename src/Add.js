import React from 'react';
import {Button, Divider, Form, Grid} from "semantic-ui-react";
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
            tags: ''
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
        this.setState({url: e.target.value});
    }

    titleChanged(e) {
        this.setState({title: e.target.value})
    }

    tagsChanged(e) {
        this.setState({tags: e.target.value});
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

        // prevent sending a tampered form
        if (this.state.title.length === 0 || this.state.tags.length === 0) {
            return;
        }

        console.log('Form submit');
        // TODO submit form
    }

    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox value={this.state.url} onChange={this.searchBoxChanged.bind(this)}
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
                                            onChange={this.titleChanged.bind(this)} placeholder="short and apt title"/>
                                <Form.Input required label="Tags" value={this.state.tags}
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