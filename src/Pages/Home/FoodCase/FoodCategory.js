import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const FoodCategory = ({name , price ,image , description,id}) => {
  
  

   const url = `/details/${id}`
return (
    <div className='animate__animated animate__backInRight'>
        <Link to={url} style={{ textDecoration: 'none'}}>
        <div className="cards p-1">
        <div className="card-content">
            <div className="card-body"> <img style={{height:'100%' , width:'100%'}}  className="img img-fluid" src={image} alt=''/>
                <div className="shadow"></div>
                <div className="card-title text-dark " >{name}</div>
                <div className="card-subtitle">
                    <p> <small className="text-muted" style={{ lineHeight: '1.6'}}>{description.slice(0,30)
}...</small> </p>
                </div>
                <p style={{backgroundColor:'white' , color:'black' , border:'none' , fontSize:'20px' , fontWeight:'bold'}}>${price}</p>
            </div>
        </div>
    </div>
    </Link>
    </div>
);
};

export default FoodCategory;