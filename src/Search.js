import React from 'react';
import {Divider, Grid} from "semantic-ui-react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import {isWebUri} from 'valid-url';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import MatchedTags from './MatchedTags';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: []
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
        } else {
            if (value.length > 2) this.doSearch(value);
        }
    }

    doSearch(term) {
        const search = {term};

        // TODO make ajax request
        this.setState({results: window.resources});
    }

    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox value={this.state.value} onChange={this.searchBoxChanged.bind(this)}/>

                            {/*<MatchedTags tags={[{name: 'nginx'}, {name: 'php'}]} />*/}
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>
                        <SearchResults resources={this.state.results}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default withRouter(Search);