import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";
import useMeals from "./useMeals";


const useCart = c =>{

  const information =(JSON.parse(localStorage.getItem('info')))
  const item =(JSON.parse(localStorage.getItem('shopping_cart')))

const [cartItem , setCartItem] = useState([])

const [food] = useMeals()

useEffect(()=>{
  const storedCart = item;
 
  const savedCart =[]
  for (const key in storedCart){
    if(food.length){
      const newP = food.find(service => service.id == key)
      if(newP){
                   
        const totalPrice = storedCart[key]*newP.price;
        newP.totalPrice = totalPrice;
        
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





const overAll ={
 
  ...information,
  cartItem,
  
  
}

  return [ total , shipping , grandTotal , cartItem , grandTotal , tax , information,overAll]
}

export default useCart;