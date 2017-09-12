import React from 'react';
import {Divider, Grid, Icon, Label} from "semantic-ui-react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import {isWebUri} from 'valid-url';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        if (_.has(window, 'searchBoxValue')) {
            this.setState({
                value: window.searchBoxValue
            }, () => delete window.searchBoxValue);
        }
    }

    searchBoxChanged(e) {
        const value = e.target.value;

        this.setState({value});

        if (value.length === 0) {
            this.props.history.push('/');
        } else if (isWebUri(value)) {
            this.props.history.push('/add');
        }
    }

    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox value={this.state.value} onChange={this.searchBoxChanged.bind(this)}/>

                            <div id="matched-channels">
                                <span>matched tags:</span>
                                <Label size="small" color="blue">
                                    nginx
                                    <Icon name='close'/>
                                </Label>
                                <Label size="small" color="blue">
                                    php
                                    <Icon name='close'/>
                                </Label>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>
                        <SearchResults resources={window.resources}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default withRouter(Search);