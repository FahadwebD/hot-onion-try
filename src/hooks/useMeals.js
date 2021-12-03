import { useEffect, useState } from "react"

const useMeals = () =>{

    const [food, setFood] = useState([]);
    const [breakfast , setBreakfast] = useState([])
    const [lunch , setLunch] = useState([])
    const [dinner , setDinner] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/redonionData/main/db.json')
    .then(res => res.json())
    .then(data => setFood(data))

    } ,[])

    useEffect(()=>{
       
        if(food.length){
         const filterdBreakfast =food.filter(f=> f.c == 'b')
         setBreakfast(filterdBreakfast)
        }

    } ,[food])
    useEffect(()=>{
       
        if(food.length){
         const filterdLunch=food.filter(f=> f.c == 'lunch')
         setLunch(filterdLunch)
        }

    } ,[food])
    useEffect(()=>{
       
        if(food.length){
         const filterdDinner=food.filter(f=> f.c == 'd')
         setDinner(filterdDinner)
        }

    } ,[food])
    return [food , breakfast , lunch , dinner]

}

export default useMeals;