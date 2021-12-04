import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import useMeals from '../../../hooks/useMeals';
import { getStoredCart } from '../../../utilities/fakedb';
import './Cart.css'
const CartItems = ({data}) => {
   
    const {name , image , price , id } = data
    const [count , setCount] = useState(1)
    const [detail , setDetail] = useState({});
    const [food] = useMeals()

    useEffect(()=>{
        const storedCart = getStoredCart();
      
        for (const key in storedCart){
         if(key==id){
            
            setCount(storedCart[key])
         }
        }
         
      },[data])

     

      let  total = price*count
   
      const [ cart , setCart ] = useState([]);

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
                setCart(storedCarts)
           }
  
         console.log(cart)
  
  
      },[food])
  

      
   
     
      const increase = ()=>{
        setCount(count+1)
        
    }
    const decrease =()=>{
        if(count>1){
            setCount(count-1)
        }
    }



    return (
        <div style={{backgroundColor:'whitesmoke' , borderRadius:'15px' , padding:'10px'}} className='d-flex justify-content-center align-items-center mb-1  '> 
           <Col xs={4} md={4}>
                <img  style={{height:'80px' , width:'80px'}} src={image} alt="" srcset="" />
                </Col>
                <Col xs={4} md={4}>
                <small>{name.slice(0,14)}</small>
                <h5 style={{color:'red'}}>${total.toFixed(2)}</h5>
                </Col>
                <Col xs={4} md={4}>
            <div className="input-steppers ">
  <button style={{color:'#f91944'}} className="minus"  onClick={decrease}>-</button>
  <input id='sb' type="text" value={count} />
  <button  style={{color:'#f91944' }} className="plus" onClick={increase}>+</button>
</div>
</Col>
        </div>
    );
};

export default CartItems;