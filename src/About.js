import React from 'react';
import {Grid, Header} from "semantic-ui-react";

const About = () => {
    return (
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Header as='h1'>About Oculare</Header>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default About;