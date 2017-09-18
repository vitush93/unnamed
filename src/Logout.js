import React from 'react';
import {Container, Icon} from "semantic-ui-react";
import {withRouter} from "react-router-dom";
import Auth from "./Auth";

const Logout = ({history}) => {

    Auth.logout();

    history.push('/');

    return (
        <Container textAlign="center">
            <br />
            <br />
            <br />
            <Icon loading name="spinner" size="huge" />
        </Container>
    );
};

export default withRouter(Logout);