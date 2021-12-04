import React, { useEffect, useState } from 'react';
import useCart from '../../../hooks/useCart';
import useMeals from '../../../hooks/useMeals';
import { getStoredCart } from '../../../utilities/fakedb';

const Total = ({cart}) => {
    console.log(cart)
  
    const[food] = useMeals()
    const [ carts , setCarts ] = useState([]);

    useEffect(()=>{

        if(food.length){
            const savedCarts = getStoredCart();
            const storedCarts =[];

            for(const key in savedCarts){
            const addedProduct = food.find(product => product.id == key)
                    if(addedProduct){
                        console.log(addedProduct)
                    const totalPrice = savedCarts[key]*addedProduct.price;
                     addedProduct.totalPrice = totalPrice;
                    storedCarts.push(addedProduct)
                }
              }
              setCarts(storedCarts)
         }

      


    },[food])
    console.log(carts)


    let total = 0;
    for (const product of carts) {
        total = total + product.totalPrice 
       
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

console.log(total)
   
console.log(grandTotal)


    return (
        <div>
            
        </div>
    );
};

export default Total;