import React from 'react';
import {Grid, Icon} from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";
import Auth from './Auth';

const Header = () => {

    let login;
    if (Auth.isLoggedIn()) {
        login = <li><NavLink to="/logout">logout</NavLink></li>;
    } else {
        login = <li><a href="/login/github">sign in with <Icon name="github"/></a></li>;
    }


    return (
        <header id="header">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Link to="/">
                            <Icon name="find" size="big"/>&nbsp;&nbsp;
                            <h4 style={{display: 'inline-block'}}>Oculare</h4>
                        </Link>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <nav id="top-nav">
                            <ul>
                                <li>
                                    <NavLink to="/about">wtf?!</NavLink>
                                </li>
                                {login}
                            </ul>
                        </nav>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </header>
    );
};

export default Header;