import React from 'react';


const Total = ({cart , info}) => {
    
  console.log(cart)
  
   

  
    let total = 0;
    for (const product of cart) {
        total = total + product.totalPrice 
       
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;




    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
            <h6>Subtotal.{cart?.length} item</h6><h6>${total.toFixed(2)}</h6>
        </div>
        <div className='d-flex justify-content-between mb-2'>
            <h6>Tax</h6><h6>${tax.toFixed(2)}</h6>
        </div>
        <div className='d-flex justify-content-between mb-2'>
            <h6>Shipping</h6><h6>${shipping.toFixed(2)}</h6>
        </div>
        <div className='d-flex justify-content-between mb-2'>
            <h4>Total</h4><h4>${grandTotal.toFixed(2)}</h4>
        </div>
        <hr/>
        </div>
    );
};

export default Total;