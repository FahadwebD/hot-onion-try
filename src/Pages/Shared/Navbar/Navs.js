import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import './BottomNav.css'
import useCart from '../../../hooks/useCart';
const Navs = () => {

  const [cartItem] = useCart()
  console.log(cartItem)
  const cart = <FontAwesomeIcon icon={faShoppingCart} />
  const user = <FontAwesomeIcon style={{fontSize:'50px', color:'pink'}} icon={faUserCircle} />
    return (
        <div className='sticky-top bg-white' >
   <Navbar >
  <Container>
    <Navbar.Brand as={Link} to="/home"><img style={{height:'50px' , width:'150px' }} src={logo} alt='' /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <NavLink  className='me-4'  to='/purchase'>  <button style={{borderRadius:'50%' , border:'none', backgroundColor:'white' ,color:'black', fontSize:'20px'}} className="position-relative">
 {cart}
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartItem.length}
    <span className="visually-hidden">cart Item</span>
  </span>
</button></NavLink>
<NavLink to='/login'><button style={{backgroundColor:'white' , border:'none' , padding:'10px 20px 10px 20px', borderRadius:'20px' , color:'dark', fontWeight:'bold'}}>Log in</button></NavLink>
      <NavLink to='/register'><button style={{backgroundColor:'#f91944' , border:'none' , padding:'10px 20px 10px 20px', borderRadius:'20px' , color:'white',}}>Sign up</button></NavLink>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navs;