import React, { useEffect, useState } from 'react';
import useMeals from '../../../hooks/useMeals';
import { deleteFromDb, getStoredCart } from '../../../utilities/fakedb';
import CartItems from './CartItems';
import './Cart.css'
import { Row } from 'react-bootstrap';
import Total from './Total';

const Cart = ({info}) => {
   const [cartItem , setCartItem] = useState([])
   const [food] = useMeals()
   const [ carts , setCarts ] = useState([]);

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
    const handleRemove = id =>{
        const newCart = cartItem.filter(product=> product.id !== id )
         setCartItem(newCart)
         deleteFromDb(id)
     }
    return (
        <div>
            <h1>This {cartItem.length}</h1>
            <Row>
            {
                cartItem.map(c=> <CartItems
                data={c}
                info={info}
                handleRemove={handleRemove}
                ></CartItems>)
            }
            </Row>
            {
                <Total cart={carts}
                
                        info={info}

                ></Total>
            }
            <div>
           {info.area? <button  style={{backgroundColor:'#f91944',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 100px', color:'white'}}>Place Order</button>: <button disabled style={{backgroundColor:'#cecece',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 100px', color:'white'}}>Place Order</button>}
            </div>
        </div>
    );
};

export default Cart;