import React, { useEffect, useState } from 'react';

import useMeals from '../../../hooks/useMeals';
import BreakfastData from './BreakfastData';
import './BreakfastDesign.css'

const Breakfast = () => {
   

    const [food , setFood] = useState([])
    const [breakfast , setBreakfast] = useState([])
   
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/redonionData/main/db.json')
    .then(res => res.json())
    .then(data => setFood(data))

    } ,[])

    useEffect(()=>{
       
        if(food.length){
         const filterdBreakfast =food.filter(f=> f.c === 'b')
         setBreakfast(filterdBreakfast)
        }

    } ,[food])
    console.log(breakfast)
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