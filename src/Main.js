import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import Add from "./Add";
import Search from "./Search";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/add" component={Add}/>
            <Route path="/search" component={Search}/>
        </Switch>
    );
};

export default Main;