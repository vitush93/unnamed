import React from 'react';
import {Divider, Grid, Icon, Label} from "semantic-ui-react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

class Search extends React.Component {
    render() {
        return (
            <Grid columns={1}>

                <Grid.Row>
                    <Grid.Column>
                        <div id="search-component">
                            <SearchBox/>

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

export default Search;