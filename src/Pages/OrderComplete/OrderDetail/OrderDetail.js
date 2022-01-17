import React from 'react';



const OrderDetail = ({data}) => {
  
    return (
        <>
      
        <div className='d-flex align-items-center justify-content-between'>
            <div className='w-25'><h6>{data.name}</h6></div>
            <div className='w-25'><h5>{data.totalQuantity}</h5></div>
             <div className='w-25'>  <img style={{height:'50px' , width: '50px'}} src={data.image}  alt='' /></div>
             <div className='w-25'><h3>{data.totalPrice}</h3></div>
        </div>
         

        </>
        
    );
};

export default OrderDetail;