import React from 'react';
import "./App.scss"
import { Container, Section } from 'rbx';
import Header from './components/header/header'
import Home from './screens/home/index'

const App = () => ( 
    <div>
        <Header />
        <Section>
            <Container>
                <Home />
            </Container>
        </Section>
    </div>
)

export default App;
