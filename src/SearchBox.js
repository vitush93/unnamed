import React from 'react';
import {Button, Icon, Input, Label} from "semantic-ui-react";

const SearchBox = () => {
    return (
        <div id="search-component">
            <Input size="massive" id="search" fluid placeholder='Search...'
                   value="setup nginx and php on ubuntu" icon="search">
            </Input>
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
    );
};

export default SearchBox;