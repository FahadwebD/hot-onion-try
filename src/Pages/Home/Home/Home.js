import React from 'react';
import {
  
    Switch,
    Route,
    Link,
   useRouteMatch,
    NavLink
  } from "react-router-dom";
import Banner from '../Banner/Banner';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Home = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Banner></Banner>
            <div className=" category-section ">
      <div className=" category-section d-flex justify-content-center h">
        <NavLink to={`${url}/breakfast`} className="category-link">
          {" "}
          Breakfast
        </NavLink>
        <NavLink to={`${url}/lunch`} className="category-link">
          {" "}
          Lunch
        </NavLink>
        <NavLink to={`${url}/dinner`} className="category-link">
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
        <Route exact path={`${path}/breakfast`}>
          <Breakfast></Breakfast>
        </Route>
        <Route exact path={`${path}/lunch`}>
          <Lunch></Lunch>
        </Route>
        <Route exact path={`${path}/dinner`}>
          <Dinner></Dinner>
        </Route>
        </Switch>
            
           
        </div>
        </div>
    );
};

export default Home;