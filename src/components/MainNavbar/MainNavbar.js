import React, { useContext } from 'react';
import logo from './../../assets/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} className="img-fluid" width="150px" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link >Donation</Nav.Link>
                        <Nav.Link >Events</Nav.Link>
                        <Nav.Link >Blogs</Nav.Link>
                    </Nav>
                    {loggedInUser.name ? <h5>{loggedInUser.name}</h5> : 
                    <>
                    <Button variant="primary mx-1 px-4">Register</Button>
                    <Button variant="dark mx-1 px-4">Admin</Button>
                    </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;