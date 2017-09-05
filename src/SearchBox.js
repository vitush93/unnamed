import React from 'react';
import {Icon, Input, Label} from "semantic-ui-react";

const SearchBox = ({onChange, matchedTags}) => {

    if (!matchedTags) matchedTags = [];

    return (
        <div id="search-component">
            <Input size="massive" id="search" fluid placeholder='Search...' onChange={(e) => onChange(e)} icon="search">
            </Input>
            {matchedTags.length > 0 &&
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
            }
        </div>
    );
};

export default SearchBox;