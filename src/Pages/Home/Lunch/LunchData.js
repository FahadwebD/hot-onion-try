
import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LunchData = ({b}) => {
    const {name , price ,image , description,id} = b
   const url = `/details/${id}`
return (
    <div>
        <Link to={url} style={{ textDecoration: 'none'}}>
        <div className="cards">
        <div className="card-content">
            <div className="card-body"> <img style={{height:'200px' , width:'60%'}}  className="img img-fluid" src={image} alt=''/>
                <div className="shadow"></div>
                <div className="card-title text-dark ">{name}</div>
                <div className="card-subtitle">
                    <p> <small className="text-muted">{description.slice(0,150)
}...</small> </p>
                </div>
                <Button style={{backgroundColor:'white' , color:'black' , border:'none' , fontSize:'20px' , fontWeight:'bold'}}>${price}</Button>
            </div>
        </div>
    </div>
    </Link>
    </div>
);
};

export default LunchData;