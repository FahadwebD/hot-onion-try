import React from 'react';
import useCart from '../../../hooks/useCart';

const OrderDetail = ({data}) => {
  
    return (
        <div>
            <h1>{data.name}</h1>
            <h5>{data.totalQuantity}</h5>
             <img style={{height:'100px' , width: '100px'}} src={data.image}  alt='' />
             <h3>{data.totalPrice}</h3>
        </div>
    );
};

export default OrderDetail;