import React, { useEffect, useState } from 'react';
import useCart from '../../../hooks/useCart';
import useMeals from '../../../hooks/useMeals';
import { getStoredCart } from '../../../utilities/fakedb';

const Total = ({cart , info}) => {
    
  
    const[food] = useMeals()
    const [ carts , setCarts ] = useState([]);

    useEffect(()=>{

        if(food.length){
            const savedCarts = getStoredCart();
            const storedCarts =[];

            for(const key in savedCarts){
            const addedProduct = food.find(product => product.id == key)
                    if(addedProduct){
                       
                    const totalPrice = savedCarts[key]*addedProduct.price;
                     addedProduct.totalPrice = totalPrice;
                    storedCarts.push(addedProduct)
                }
              }
              setCarts(storedCarts)
         }

      


    },[food])
   

  
    let total = 0;
    for (const product of carts) {
        total = total + product.totalPrice 
       
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;




    return (
        <div>
            <div className='d-flex justify-content-between mb-2'>
            <h6>Subtotal.{carts.length} item</h6><h6>${total.toFixed(2)}</h6>
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