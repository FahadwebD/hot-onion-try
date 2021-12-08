import { useState } from "react";
import { set, useForm } from "react-hook-form";




const useInfo =()=>{


    const [info, setInfo]= useState({})
    const { register, handleSubmit , reset } = useForm();
    const onSubmit = data =>{
        setInfo(data);
        reset()
    }

 
    return [info ,setInfo , register , handleSubmit , onSubmit , reset]

}

export default useInfo;