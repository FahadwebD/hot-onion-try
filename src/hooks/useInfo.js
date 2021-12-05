import { useState } from "react";
import { set, useForm } from "react-hook-form";




const useInfo =()=>{


    const [info, setInfo]= useState({})
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setInfo(data);

 
    return [info ,setInfo , register , handleSubmit , onSubmit]

}

export default useInfo;