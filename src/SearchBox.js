import React from 'react';
import {Input} from "semantic-ui-react";

const SearchBox = ({value, onChange, placeholder, error}) => {

    const changeHandler = (e) => {
        window.searchBoxValue = e.target.value;

        onChange(e);
    };

    if (!error) error = false;

    return (
        <Input value={value}
               error={error}
               size="massive"
               id="search"
               autoFocus
               fluid
               placeholder={placeholder ? placeholder : 'search or paste url to post new..'}
               onChange={changeHandler}
               icon="search"/>
    )
};

export default SearchBox;