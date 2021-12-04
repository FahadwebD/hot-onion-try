import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'


const Navs = () => {
    return (
        <div>
   <Navbar>
  <Container>
    <Navbar.Brand href="#home"><img style={{height:'50px' , width:'150px' }} src={logo} alt='' /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navs;