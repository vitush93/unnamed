import React from 'react';
import {Container, Header} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";

const AddSuccess = ({history}) => {

    setTimeout(() => {
        history.push('/');
    }, 5000);

    return (
        <Container textAlign="center">
            <br />
            <br />
            <Header as="h2">Thank you for your submission!</Header>
            <p>Your submission might be reviews before going public.</p>
            <p>Go <Link to="/">back</Link> wait for redirect (5s).</p>
        </Container>
    );
};

export default withRouter(AddSuccess);