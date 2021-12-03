import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useMeals from '../../../hooks/useMeals';
import BreakfastData from './BreakfastData';
import './BreakfastDesign.css'

const Breakfast = () => {
    const [food , breakfast , lunch , dinner] =useMeals()
    
    return (
        <div className='mt-5'>
        <div className='container mapGrid'>
        
        {
            breakfast.map(b=> <BreakfastData
            key={b.id}
            b={b}
            ></BreakfastData>)
        }
    </div>
   </div>
    );
};

export default Breakfast;