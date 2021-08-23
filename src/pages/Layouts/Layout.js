import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer';
import SideBar from './SideBar';

export const Layout = (props) => (

    <div>
        <Header />
        <Container>
            {props.children}
        </Container>
        <Footer />
    </div>
)