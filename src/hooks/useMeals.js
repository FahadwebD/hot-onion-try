import { useEffect, useState } from "react"

const useMeals = () =>{

    const [food, setFood] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/redonionData/main/db.json')
    .then(res => res.json())
    .then(data => setFood(data))

    } ,[])

 

    return [food ]

}

export default useMeals;