import React, { useEffect, useState } from 'react';
import {
  
    Switch,
    Route,
   useRouteMatch,
    NavLink
  } from "react-router-dom";

import Banner from '../Banner/Banner';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './StyleNav.css';

const Home = () => {
    let { path, url } = useRouteMatch();


   

    


    return (
        <div>
            <Banner></Banner>
            <div className=" category-section ">
      <div className=" category-section d-flex justify-content-center h">
        <NavLink to='/home/breakfast' className="category-link">
          {" "}
          Breakfast
        </NavLink>
        <NavLink to='/home/lunch' className="category-link">
          {" "}
          Lunch
        </NavLink>
        <NavLink to='/home/dinner' className="category-link">
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