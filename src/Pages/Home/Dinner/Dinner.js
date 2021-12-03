import React from 'react';
import useMeals from '../../../hooks/useMeals';
import DinnerData from './DinnerData';


const Dinner = () => {
    const [food , breakfast , lunch , dinner] =useMeals()
    console.log(dinner)
    return (
        <div className='mt-5'>
        <div className='container mapGrid'>
        
        {
            dinner.map(b=> <DinnerData
            key={b.id}
            b={b}
            ></DinnerData>)
        }
    </div>
   </div>
    );
};

export default Dinner;