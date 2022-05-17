import React, { useContext, useEffect } from 'react';
import CartContext from '../../../context/cart/CartContext';


const Total = ({cart , info}) => {
    
  console.log(cart)
  
   
  const {  cartItems } = useContext(CartContext);
    console.log(cartItems)
 
  useEffect(()=>{
    let cost = 0
    for (const price of cart){
        console.log(price.totalPrice)
        cost= cost+price.totalPrice
        console.log(cost)
    }
  },[cart])
console.log(cart)
    let total = 0;
   
    total  = cart.reduce((amount, item) => item.price + amount, 0)
    console.log(total)
    
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;


    
    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
            <h6>Subtotal.{cart?.length} item</h6><h6>${total}</h6>
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