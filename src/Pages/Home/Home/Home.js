import React, { useEffect, useState , useLayoutEffect } from 'react';
import {
  
    Switch,
    Route,
   useRouteMatch,
    NavLink,
    useLocation 
  } from "react-router-dom";
import Navbar from '../../Shared/Navbar/Navbar';

import Banner from '../Banner/Banner';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './StyleNav.css';

const Home = () => {
    let { path, url } = useRouteMatch();

    const location = useLocation();
   

    useLayoutEffect(() => {
      window.scrollTo(10, 10);
    }, [location.pathname]);


    return (
        <div>
          <Navbar></Navbar>
            <Banner></Banner>
            <div className=" category-section mt-3 ">
      <div className=" category-section d-flex justify-content-center h">
        <NavLink  to='/home/breakfast'  activeClassName='cate' className="category-link">
          {" "}
          Breakfast
        </NavLink>
        <NavLink to='/home/lunch' activeClassName='cate' className="category-link">
          {" "}
          Lunch
        </NavLink>
        <NavLink to='/home/dinner' activeClassName='cate' className="category-link">
          {" "}
          Dinner
        </NavLink>
  
      </div>
      </div>
        <div>
            
            <Switch>
            <Route exact path={path}>
          <Breakfast></Breakfast>
        </Route>
        <Route exact path='/home/breakfast'>
          <Breakfast></Breakfast>
        </Route>
        <Route exact path='/home/lunch' >
          <Lunch></Lunch>
        </Route>
        <Route exact path='/home/dinner' >
          <Dinner></Dinner>
        </Route>
        </Switch>
            
           
        </div>
        </div>
    );
};

export default Home;