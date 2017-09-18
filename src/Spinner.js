import React from 'react';
import {Container, Grid, Icon} from "semantic-ui-react";


const Spinner = () => {
    return (
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Container textAlign="center">
                        <p><Icon name="spinner" size="huge" loading/></p>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Spinner;