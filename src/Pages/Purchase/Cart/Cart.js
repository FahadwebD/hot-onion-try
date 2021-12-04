import React, { useEffect, useState } from 'react';
import useMeals from '../../../hooks/useMeals';
import { getStoredCart } from '../../../utilities/fakedb';
import CartItems from './CartItems';
import './Cart.css'
import { Row } from 'react-bootstrap';
import Total from './Total';

const Cart = () => {
   const [cartItem , setCartItem] = useState([])
   const [food] = useMeals()


    useEffect(()=>{
        const storedCart = getStoredCart();
        console.log(storedCart)
        const savedCart =[]
        for (const key in storedCart){
          if(food.length){
            const newP = food.find(service => service.id == key)
            savedCart.push(newP)
          }
        
        }
         setCartItem(savedCart)
      },[food])

       
console.log(cartItem)

    
    return (
        <div>
            <h1>This {cartItem.length}</h1>
            <Row>
            {
                cartItem.map(c=> <CartItems
                data={c}

                ></CartItems>)
            }
            </Row>
            {
                <Total cart={cartItem}></Total>
            }
        </div>
    );
};

export default Cart;