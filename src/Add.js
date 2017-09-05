import React from 'react';
import {Button, Divider, Form, Grid, Input} from "semantic-ui-react";
import {withRouter} from 'react-router-dom';

class Add extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.search = this.search.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
    }

    componentDidMount() {
        if (window.searchTermTemp) {
            this.searchbox.inputRef.value = window.searchTermTemp;

            this.setState({
                searchTerm: window.searchTermTemp
            });

            this.searchbox.focus();
            delete window.searchTermTemp;
        }
    }

    search(e) {
        const val = e.target.value;

        this.setState({
            searchTerm: val
        });
    }

    cancelAdd(e) {
        e.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <Input ref={(input) => this.searchbox = input} size="massive" id="search" fluid placeholder='enter a resource URL' onChange={this.search} icon="linkify"/>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>

                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input required label="Resource title" placeholder="short and apt title"/>
                                <Form.Input required label="Tags" placeholder="comma separated tags"/>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.TextArea label="Your notes" placeholder="(markdown enabled)"
                                               style={{height: 200}}/>
                                <Form.TextArea label="Search queries" placeholder="one query per line"
                                               style={{height: 200}}/>
                            </Form.Group>
                            <Input type="hidden" value={this.state.searchTerm}/>

                            <Button color="green">Submit resource</Button>
                            <Button color="red" onClick={this.cancelAdd}>Cancel</Button>
                        </Form>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const AddWithRouter = withRouter(Add);

export default AddWithRouter;