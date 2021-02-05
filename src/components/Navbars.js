import React from 'react';
import {Navbar, Nav, Container, Form, FormControl} from 'react-bootstrap';
import logo from '../img/logo_Desktop.svg'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa";

const Navcontainer = styled.div`
    --bgcolor: rgb(253, 183, 59);
    font-family:'Poppins', sans-serif;
    font-weight: 500;
    background-color: var(--bgcolor);
    form{
        width: 25%;
        border-radius: 4rem;
        background-color: #fff;
        padding-left: 20px;
    }
    .form-control{
        border: none;
    }
    .form-control:focus{
        box-shadow:none;
    }
`;

function Navbars() {
    return (
        <Navcontainer>
        <Container>
        <Navbar  expand="lg">
        <Navbar.Brand><Link to="/"><img src={logo} alt="logo"/></Link></Navbar.Brand>
        <Form inline>
            <FaSearch />
            <FormControl type="text" placeholder="Search" className="px-sm-2"/>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/link">TV Show</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
        </Navcontainer>
        
    )
}

export default Navbars
