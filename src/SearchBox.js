import React from 'react';
import {Input} from "semantic-ui-react";
import {withRouter} from 'react-router-dom';
import {isWebUri} from 'valid-url';


class SearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        if (window.searchTermTemp) {
            this.searchbox.inputRef.value = window.searchTermTemp;

            delete window.searchTermTemp;
        }

        this.searchbox.focus();
    }

    onChange(e) {
        const val = e.target.value;
        window.searchTermTemp = val;

        if (val.length === 0) {
            this.props.history.push('/');

            return;
        }

        if (isWebUri(val)) {
            this.props.history.push('/add');
        } else {
            this.props.history.push('/search');
        }
    }

    render() {
        return (
            <Input size="massive" id="search" ref={(input) => this.searchbox = input} fluid
                   placeholder='search or paste url to post new..' onChange={this.onChange} icon="search"/>
        );
    }
}

const SearchBoxWithRouter = withRouter(SearchBox);

export default SearchBoxWithRouter;