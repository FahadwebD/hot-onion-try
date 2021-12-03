import React from 'react';
import useMeals from '../../../hooks/useMeals';
import LunchData from './LunchData';

const Lunch = () => {
    const [food , breakfast , lunch , dinner] =useMeals()
    console.log(lunch)
    return (
        <div className='mt-5'>
        <div className='container mapGrid'>
        
        {
            lunch.map(b=> <LunchData
            key={b.id}
            b={b}
            ></LunchData>)
        }
    </div>
   </div>
    );
};

export default Lunch;