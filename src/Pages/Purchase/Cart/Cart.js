import React, { useEffect, useState } from 'react';
import useMeals from '../../../hooks/useMeals';
import { deleteFromDb, getStoredCart } from '../../../utilities/fakedb';
import CartItems from './CartItems';
import './Cart.css'
import { Row } from 'react-bootstrap';
import Total from './Total';
import { Link } from 'react-router-dom';

const Cart = ({info}) => {

   const [food] = useMeals()
   const [ carts , setCarts ] = useState([]);
   
   

   console.log(carts)

   


       



    useEffect(()=>{

        if(food.length){
            const savedCarts = getStoredCart();
            const storedCarts =[];
             console.log(savedCarts)
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
        const newCart = carts.filter(product=> product.id !== id )
         setCarts(newCart)
         deleteFromDb(id)
     }



    return (
        <div>
            <p className='d-flex me-2' style={{fontSize:'20px' }}>Deliver To : <span style={{fontWeight:'bold'}}>{info.area}</span></p>
            <Row>
            {
                carts.map(c=> <CartItems
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
           {info.area?<Link to='/order'><button  style={{backgroundColor:'#f91944',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 100px', color:'white'}}>Place Order</button></Link>: <button disabled style={{backgroundColor:'#cecece',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 100px', color:'white'}}>Place Order</button>}
            </div>
        </div>
    );
};

export default Cart;