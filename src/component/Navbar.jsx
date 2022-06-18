import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import React from "react";

const navbar = () => {
    return (
      <div>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
            <Nav className='me-auto'>
              {/* <Link to='/'>Home</Link>
              <Link to='/singin'>SingIn</Link>  */}
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#features'>Sing In</Nav.Link>
              {/* <Nav.Link href='#pricing'>Pricing</Nav.Link> */}
              <i class='fa-solid fa-card-club'></i>
              <Button variant='light' style={{flot: 'right'}}>Cart</Button>{" "}
            </Nav>
          </Container>
        </Navbar>

      
      </div>
    );
};

export default navbar;
