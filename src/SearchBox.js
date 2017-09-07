import React from 'react';
import {Input} from "semantic-ui-react";
import {withRouter} from 'react-router-dom';
import {isWebUri} from 'valid-url';


class SearchBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    // componentDidMount() {
        // if (window.searchTermTemp) {
        //     this.searchbox.inputRef.value = window.searchTermTemp;
        //
        //     delete window.searchTermTemp;
        // }

        // this.searchbox.focus();
    // }

    onChange(e) {
        // const value = e.target.value;
        this.setState({value: e.target.value});

        console.log(this.state.value);

        // window.searchTermTemp = value;

        if (this.state.value.length === 0) {
            this.props.history.push('/');

            return;
        }

        if (isWebUri(this.state.value)) {
            this.props.history.push('/add');
        } else {
            this.props.history.push('/search');
        }
    }

    render() {
        return (
            <Input value={this.state.value}
                   size="massive"
                   id="search"
                   autoFocus
                   // ref={(input) => this.searchbox = input}
                   fluid
                   placeholder='search or paste url to post new..'
                   onChange={this.onChange}
                   icon="search"/>
        );
    }
}

const SearchBoxWithRouter = withRouter(SearchBox);

export default SearchBoxWithRouter;