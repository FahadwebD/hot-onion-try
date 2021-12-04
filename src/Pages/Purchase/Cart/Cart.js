import React, { useEffect, useState } from 'react';
import useMeals from '../../../hooks/useMeals';
import { getStoredCart } from '../../../utilities/fakedb';
import CartItems from './CartItems';
import './Cart.css'
import { Row } from 'react-bootstrap';
const Cart = () => {
   const [cartItem , setCartItem] = useState([])
   const [food] = useMeals()


    useEffect(()=>{
        const storedCart = getStoredCart();
  
        const savedCart =[]
        for (const key in storedCart){
          if(food.length){
            const newP = food.find(service => service.id == key)
            savedCart.push(newP)
          }
        
        }
         setCartItem(savedCart)
      },[food])

       


    
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
        </div>
    );
};

export default Cart;