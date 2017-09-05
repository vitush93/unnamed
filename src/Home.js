import React from 'react';
import {Divider, Grid} from "semantic-ui-react";
import NewsFeed from "./NewsFeed";
import SearchBox from "./SearchBox";

class Home extends React.Component {
    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox/>
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Divider hidden/>

                <Grid.Row>
                    <Grid.Column>
                        <NewsFeed/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;