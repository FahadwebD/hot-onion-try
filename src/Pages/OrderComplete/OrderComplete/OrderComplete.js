import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInfo from '../../../hooks/useInfo';
import useMeals from '../../../hooks/useMeals';
import BottomNav from '../../Shared/Navbar/BottomNav';
import Navs from '../../Shared/Navbar/Navs';
import OrderDetail from '../OrderDetail/OrderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import './Order.css'
const OrderComplete = () => {
    const elementCheck = <FontAwesomeIcon icon={faCheck}/>
    const information =(JSON.parse(localStorage.getItem('info')))
    const item =(JSON.parse(localStorage.getItem('shopping_cart')))
  console.log(information)
  console.log(item)
  const [cartItem , setCartItem] = useState([])
 
 const [pay , setPay] = useState('Payment')
  const [food] = useMeals()
 console.log(cartItem)
  useEffect(()=>{
    const storedCart = item;
   
    const savedCart =[]
    for (const key in storedCart){
      if(food.length){
        const newP = food.find(service => service.id == key)
        if(newP){
                     
          const totalPrice = storedCart[key]*newP.price;

          newP.totalPrice = totalPrice;
          newP.totalQuantity= storedCart[key];
          
      }
        savedCart.push(newP)
      }
    
    }

     setCartItem(savedCart)
  },[food])

  let total = 0;
  for (const product of cartItem) {
      total = total + product.totalPrice 
     
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.10;
  const grandTotal = total + shipping + tax;

  console.log(total)


 
  const overAll ={
   
    ...information,
    item,
    pay,
    grandTotal
  }
  const clearAll=()=>{
   
    setPay('Paid')
      localStorage.clear();
    
  }
  const clearAll2=()=>{
   
    setPay('Cash on Delivery')
      localStorage.clear();
    
  }

 
  console.log(overAll)
  
    return (
      <>
       <div>
       {information?<div>
        <div className='WebsiteNav' >
        <Navs></Navs>
      </div>

        <div className='d-flex  flex-row align-items-center justify-content-around '>

       <div className='w-50'>
           {cartItem.map(a => <OrderDetail data={a}
            ></OrderDetail>)
          
          } 
         </div>
        
            
           
        
        <div className='p-4 bg-light me-2' >
          <div>
            <p> total:{grandTotal}</p>
          </div>
          <div className='p-3'><select className='mb-2' class="form-select" aria-label="Default select example">
  <option setPay='Cash On Delivery' selected>Cash On Delivery</option>
  <option setPay='Cash On Delivery' >Cash On Delivery</option>
  
  
</select><div><button onClick={clearAll} style={{backgroundColor:'#f91944' , border:'none' , padding:'10px 20px 10px 20px', borderRadius:'20px' , color:'white', fontWeight:'bold'}}>Order Complete</button></div></div>
           
           </div>
           </div>
           
         <div className='mobileNav'><BottomNav></BottomNav></div>
       </div>:<div class="container">
         <div class="row">
            <div class="col-md-6 mx-auto mt-5">
               <div class="payment">
                  <div class="payment_header">
                     <div class="check"><i class="fa fa-check" aria-hidden="true">{elementCheck}</i></div>
                  </div>
                  <div class="content">
                     <h1>Order Success !</h1>
                     <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                     <Link to='/'>Go to Home</Link>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>}
       </div>
        </>
    );
};

export default OrderComplete;