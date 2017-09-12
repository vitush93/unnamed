import React from 'react';
import {Input} from "semantic-ui-react";

const SearchBox = ({value, onChange, placeholder}) => {

    // FIXME using global window variable
    const changeHandler = (e) => {
        window.searchBoxValue = e.target.value;

        onChange(e);
    };

    return (
        <Input value={value}
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