import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useInfo from '../../../hooks/useInfo';
import useMeals from '../../../hooks/useMeals';
import BottomNav from '../../Shared/Navbar/BottomNav';
import Navs from '../../Shared/Navbar/Navs';
import OrderDetail from '../OrderDetail/OrderDetail';
import UserOrder from '../UserOrder/UserOrder';

const OrderComplete = () => {

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
      <div className='WebsiteNav' >
        <Navs></Navs>
      </div>

        <div className='d-flex  flex-row align-items-center justify-content-between '>

       <div className='w-50'>
           {cartItem.map(a => <OrderDetail data={a}
            ></OrderDetail>)
          
          } 
         </div>
        
            
           
        
        <div className='p-4' >
          <div>
            <p> total:{grandTotal}</p>
          </div>
          <div><select class="form-select" aria-label="Default select example">
  <option setPay='Cash On Delivery' selected>Cash On Delivery</option>
  <option setPay='Cash On Delivery' >Cash On Delivery</option>
  
  
</select><div><button>Order Complete</button></div></div>
           
           </div>
           </div>
           
         <div className='mobileNav'><BottomNav></BottomNav></div>
        </>
    );
};

export default OrderComplete;