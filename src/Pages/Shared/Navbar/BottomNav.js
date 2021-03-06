import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { faThLarge} from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import'./BottomNav.css'
import useAuth from '../../../hooks/useAuth';
const BottomNav = () => {
  const {user} = useAuth()
    const home = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faHome} />
    const users= <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faUserCircle} />
    const bag = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faShoppingBag} />
    const dash = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faThLarge} />
    const sign = <FontAwesomeIcon style={{fontSize:'7vw'}} icon={faSignInAlt} />
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
  {user?.email?<Link to="/" className="nav__link">
   {users}
    <span className="nav__text">{user?.displayName.substring(0, 6)}</span>
  </Link>:<Link to="/login" className="nav__link">
   {sign}
    <span className="nav__text">Sign</span>
  </Link>}
</nav>
        </div>
    );
};

export default BottomNav;