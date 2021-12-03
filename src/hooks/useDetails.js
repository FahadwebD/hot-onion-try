import { useEffect, useState } from "react";


const useDetails=()=>{

    const [food, setFood] = useState([]);
    

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/redonionData/main/db.json')
    .then(res => res.json())
    .then(data => setFood(data))

    } ,[])

   

}

export default useDetails;