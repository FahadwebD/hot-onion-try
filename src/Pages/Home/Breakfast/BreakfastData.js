import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BreakfastDesign.css'


const BreakfastData = ({b}) => {
   console.log(b)
  
   const {name , price ,image} = b
return (
    <div>
        <div className="cards">
        <div className="card-content">
            <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={image} alt=''/>
                <div className="shadow"></div>
                <div className="card-title">{name}</div>
                <div className="card-subtitle">
                    <p> <small className="text-muted">{price}</small> </p>
                </div>
                <Link to='/details'><Button style={{backgroundColor:'#8dd1fe' , color:'dark' , border:'none'}}>Appointment</Button></Link>
            </div>
        </div>
    </div>
    </div>
);
};

export default BreakfastData;