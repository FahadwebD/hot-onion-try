import React from 'react';
import BottomNav from '../../Shared/Navbar/BottomNav';
import Navs from '../../Shared/Navbar/Navs';
import Banner from '../Banner/Banner';
import './StyleNav.css'
import Category from '../Category/Category';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div>
            <div className='WebsiteNav sticky-top'><Navs></Navs></div>
            <Banner></Banner>
            <Category></Category>
            <WhyChooseUs/>
            <div className='mobileNav'><BottomNav></BottomNav></div>
            
    </div>
  );
};

export default Home;