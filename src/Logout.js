import React from 'react';
import {Container, Icon} from "semantic-ui-react";
import * as Lockr from "lockr";
import {withRouter} from "react-router-dom";

const Logout = ({history}) => {

    Lockr.rm('token');
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