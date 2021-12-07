import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { faThLarge} from '@fortawesome/free-solid-svg-icons'

import'./BottomNav.css'
const BottomNav = () => {
    const home = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faHome} />
    const user = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faUserCircle} />
    const bag = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faShoppingBag} />
    const dash = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faThLarge} />
    return (
        <div className='fixed-bottom bg-white'>
  <nav className="nav">
  <NavLink to="/" className="nav__link">
    {home}
    <span className="nav__text">Home</span>
  </NavLink>
  <a href="/" className="nav__link ">
   {dash}
    <span className="nav__text">Dashboard</span>
  </a>
  <NavLink to="/purchase" className="nav__link">
    {bag}
    <span className="nav__text">cart</span>
  </NavLink>
  <a href="#" className="nav__link">
   {user}
    <span className="nav__text">account</span>
  </a>
</nav>
        </div>
    );
};

export default BottomNav;