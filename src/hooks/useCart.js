import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";


const useCart = c =>{

  
    let total = 0;
    for (const product of c) {
       
        total = total + product.totalPrice ;
       
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;



  return [ total , shipping , grandTotal]
}

export default useCart;