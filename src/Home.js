import React from 'react';
import {Divider, Grid} from "semantic-ui-react";
import NewsFeed from "./NewsFeed";
import SearchBox from "./SearchBox";
import {isWebUri} from 'valid-url';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value: ''
        };
    }

    searchBoxChanged(e) {
        const value = e.target.value;
        this.setState({value});

        if (isWebUri(value)) {
            this.props.history.push('/add');
        } else {
            this.props.history.push('/search');
        }
    }

    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox value={this.state.value} onChange={this.searchBoxChanged.bind(this)}/>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>
                        {/*<NewsFeed/>*/}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default withRouter(Home);