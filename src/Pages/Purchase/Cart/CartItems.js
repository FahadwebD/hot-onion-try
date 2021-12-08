import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { addToDb,  getStoredCart } from '../../../utilities/fakedb';
import './Cart.css'
const CartItems = ({data , info, handleRemove ,handle}) => {
   
    const {name , image , price , id } = data
    const [count , setCount] = useState(1)


    useEffect(()=>{
        const storedCart = getStoredCart();
      
        for (const key in storedCart){
         if(key==id){
            
            setCount(storedCart[key])
         }
        }
         
      },[])

     

      let  total = price*count
   
    
      
      const increase = ()=>{
        setCount(count+1)
    
            window.location.reload();
         
    }
    const decrease =(id)=>{
        if(count>1){
            
            setCount(count-1)
            
           
        }
        else{
            handleRemove(id)
        }
        window.location.reload();
    }
    
   
     
    useEffect(()=>{
        addToDb(id,count)
        
    },[count,total])



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
            {info?.area?`${count} orderd`:<div className="input-steppers ">
  <button style={{color:'#f91944'}} className="minus"  onClick={()=>decrease(id)}>-</button>
  <input id='sb' type="text" value={count} />
  <button  style={{color:'#f91944' }} className="plus" onClick={increase}>+</button>
</div>}
</Col>
        </div>
    );
};

export default CartItems;