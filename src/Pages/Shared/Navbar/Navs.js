import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'


const Navs = () => {
    return (
        <div>
   <Navbar>
  <Container>
    <Navbar.Brand as={Link} to="/home"><img style={{height:'50px' , width:'150px' }} src={logo} alt='' /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <NavLink to='/purchase'>Cart</NavLink>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navs;