import React from 'react';
import Navs from '../../Shared/Navbar/Navs';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div>
       <Navs></Navs>
            <Banner></Banner>
            <Category></Category>
    </div>
  );
};

export default Home;