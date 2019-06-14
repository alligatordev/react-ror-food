import React from 'react';
import "./App.scss"
import { Container, Section } from 'rbx';
import Header from './components/header/header'
import Routes from './router'

const App = () => ( 
    <div>
        <Header />
        <Section>
            <Container>
                <Routes />
            </Container>
        </Section>
    </div>
)

export default App;
