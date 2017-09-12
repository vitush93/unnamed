import React from 'react';
import {Grid, Header} from "semantic-ui-react";

const About = () => {
    return (
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h2'>About Oculare</Header>
                    <p>Oculare (working title) is a simple resource search engine for developers.</p>
                    <p>Have you ever stored a relevant note or a bookmark and then totally forgot about its existence? Whether it's a video tutorial, gist or a library, put it here for everyone to find!</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default About;