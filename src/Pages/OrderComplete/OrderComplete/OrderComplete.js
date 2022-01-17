import React, { useEffect, useState } from 'react';
import useInfo from '../../../hooks/useInfo';
import useMeals from '../../../hooks/useMeals';
import OrderDetail from '../OrderDetail/OrderDetail';
import UserOrder from '../UserOrder/UserOrder';

const OrderComplete = () => {

    const information =(JSON.parse(localStorage.getItem('info')))
    const item =(JSON.parse(localStorage.getItem('shopping_cart')))
  console.log(information)
  console.log(item)
  const [cartItem , setCartItem] = useState([])
  const [testing , setTesting] = useState({})
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
    setTesting(overAll)
    setPay('Paid')
      localStorage.clear();
    
  }
  const clearAll2=()=>{
    setTesting(overAll)
    setPay('Cash on Delivery')
      localStorage.clear();
    
  }

 
  console.log(overAll)
  
    return (
        <div>
        {testing.cartItem?<div>
         {
            <UserOrder></UserOrder>
          }
         </div>:<div>
         {
            cartItem.map(a => <OrderDetail data={a}
            ></OrderDetail>)
          }
           <button onClick={clearAll}>Payment</button>
           <button onClick={clearAll2}>Cash On Delivery</button>
         </div>}
        
            <div><h1>{information?.name}</h1></div>
           
        </div>
    );
};

export default OrderComplete;