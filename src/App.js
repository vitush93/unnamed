import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import './App.css';
import Header from "./Header";
import Main from "./Main";

class App extends Component {
    render() {
        return (
            <Container>

                <Header />

                <Main />

            </Container>
        );
    }
}

export default App;
