import React from 'react';
import {Grid, Icon} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <a href="/">
                            <Icon name="find" size="big"/>&nbsp;&nbsp;
                            <h4 style={{display: 'inline-block'}}>Oculare</h4>
                        </a>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <nav id="top-nav">
                            <ul>
                                <li>
                                    <NavLink to="/about">wtf?!</NavLink>
                                </li>
                                <li><a href="">sign in with <Icon name="github"/> </a></li>
                            </ul>
                        </nav>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </header>
    );
};

export default Header;