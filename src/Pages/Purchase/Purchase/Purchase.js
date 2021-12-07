import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { set, useForm } from "react-hook-form";
import Navs from '../../Shared/Navbar/Navs';
import useInfo from '../../../hooks/useInfo';
import BottomNav from '../../Shared/Navbar/BottomNav';

const Purchase = () => {
  const [dis , setDis] = useState(false)
  console.log(dis)
  const [info , setInfo , register, handleSubmit , onSubmit] = useInfo()


  useEffect(() => {
    // storing input name
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

      const sel=()=>{
        setDis(true)
      }
    return (
      <>
    <div className='WebsiteNav'><Navs></Navs></div>
        <div className=' purch '>
            
            

            <Container>
  <Row>
    <Col style={{backgroundColor:'white' , paddingTop:'20px' , marginTop:'40px' , marginRight:'300px'}} lg={4 ,{order:'1'}} xs={4 ,{order:'2'}} md={4} > <div>
      <h4 >Edit You Details</h4>
      <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input style={{width:'100%', backgroundColor:'whitesmoke' , border:'none' , padding:'10px' , marginBottom:'20px'}} {...register("name", { required: true, maxLength: 20 })} placeholder='name'/>
      <input style={{width:'100%', backgroundColor:'whitesmoke' , border:'none' , padding:'10px' , marginBottom:'20px'}} {...register("roadNo", {required: true, })} placeholder='road' />
      <input style={{width:'100%', backgroundColor:'whitesmoke' , border:'none' , padding:'10px' , marginBottom:'20px'}} {...register("area", {required: true, })} placeholder='flat, suit or floor' />
      <input style={{width:'100%', backgroundColor:'whitesmoke' , border:'none' , padding:'10px' , marginBottom:'20px'}} {...register("mobile", {required: true, })} placeholder='mobile number'/>
      <input style={{width:'100%', backgroundColor:'whitesmoke' , border:'none' , padding:'10px' , marginBottom:'20px'}}  {...register("instruction", )} placeholder='Add delivery instructor' />
     {info?.area? <input  disabled type="submit" style={{backgroundColor:'#cecece',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 100px', color:'white'}}/>: <input  onClick={sel} type="submit" style={{backgroundColor:'#f91944',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 100px', color:'white'}}/>}
    </form>
        </div>
     
        </Col>
    <Col  lg={4 ,{order:'2'}} xs={4 ,{order:'1'}} md={4} ><Cart info={info}></Cart></Col>
  </Row>
</Container>
<div className='mobileNav'><BottomNav></BottomNav></div>
        </div>
        </>
    );
};

export default Purchase;