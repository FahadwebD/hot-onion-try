import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import useCart from '../../../hooks/useCart';
import useMeals from '../../../hooks/useMeals';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import './Cart.css'
const CartItems = ({data}) => {
   
    const {name , image , price , id } = data
    const [count , setCount] = useState(1)
 
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
   
    
      
      const increase = ()=>{
        setCount(count+1)
        
    }
    const decrease =()=>{
        if(count>1){
            setCount(count-1)
            
        }
    }
    
   
     
    useEffect(()=>{
        addToDb(id,count)
    },[count])



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