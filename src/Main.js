import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from './Home';
import About from './About';
import Add from "./Add";
import Search from "./Search";
import queryString from 'query-string';
import Auth from './Auth';
import Logout from "./Logout";

const Main = ({history}) => {

    const parsed = queryString.parse(window.location.search);
    if (parsed.token) {
        Auth.login(parsed.token);

        history.push('/');
    }

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/add" component={Add}/>
            <Route path="/search" component={Search}/>
            <Route path="/logout" component={Logout}/>
        </Switch>
    );
};

export default withRouter(Main);