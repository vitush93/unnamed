import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import axios from 'axios';
import api from './api';
import Home from './Home';
import About from './About';
import Add from "./Add";
import Search from "./Search";
import queryString from 'query-string';
import Auth from './Auth';
import Logout from "./Logout";
import Spinner from "./Spinner";
import AddSuccess from "./AddSuccess";

const Main = ({history}) => {

    let HomeComponent = Home;
    const parsed = queryString.parse(window.location.search);

    if (parsed.token) {

        HomeComponent = Spinner;
        Auth.login(parsed.token);

        // asynchronously load user data from API
        setTimeout(() => {
            axios.get(api().user(), {headers: {'X-Auth-Token': parsed.token}})
                .then(user => {
                    Auth.setUser(user.data);

                    // redirect back to home, to display app in logged state
                    history.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }, 1000);
    }

    return (
        <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/about" component={About}/>
            <Route path="/add" component={Add}/>
            <Route path="/add-success" component={AddSuccess}/>
            <Route path="/search" component={Search}/>
            <Route path="/logout" component={Logout}/>
        </Switch>
    );
};

export default withRouter(Main);