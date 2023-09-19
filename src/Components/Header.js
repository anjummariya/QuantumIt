import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../Images/logo.png'

const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };



const Header=()=>{
    return(
            <Navbar bg="white" expand="sm" style={navbarStyle}>
              <Container>
                <Navbar.Brand href="#" className='text-center'>
                  <img
                    src=
                    {logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Your Logo"
                  />
                  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto text-center">
                    <Nav.Link href="#" className="items" >Home</Nav.Link>
                    <Nav.Link href="#" className="items" >About</Nav.Link>
                    <Nav.Link href="#" className="items" >Project</Nav.Link>
                    <Nav.Link href="#"className="items" >Blog</Nav.Link>
                    <Nav.Link href="#" className="items" >Services</Nav.Link>
                    <Nav.Link href="#"className="items" >Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
       
        
    );
};

export default Header;