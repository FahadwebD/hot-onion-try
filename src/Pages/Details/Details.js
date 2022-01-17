import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useMeals from '../../hooks/useMeals';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Details.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Navs from '../Shared/Navbar/Navs';
import BottomNav from '../Shared/Navbar/BottomNav';
import useAuth from '../../hooks/useAuth';
SwiperCore.use([Navigation]);

const Details = () => {
    const [count , setCount] = useState(1)
    const element = <FontAwesomeIcon icon={faCartPlus} />
    const {mealsId} = useParams();
    const [food] = useMeals();
    const [detail , setDetail] = useState({});
    const [b, setB] = useState(false)
    const {name , price , description , image, id} = detail;
   
  const {user} = useAuth()
   


    



useEffect(()=>{
  const storedCart = getStoredCart();
  console.log(storedCart)
  for (const key in storedCart){
    if(key==mealsId){
    setCount(storedCart[key])
    setB(true)
    }
    
  }
   
},[mealsId])


  const addToCart =()=>{
    let  total = price*count
    console.log(total)
  addToDb(id,count , user)
  
  }



   const increase = ()=>{
       setCount(count+1)
       
   }
   const decrease =()=>{
       if(count>1){
           setCount(count-1)
       }
   }
    
    useEffect(()=>{
  
        if (food.length){
            const id = mealsId;
    
            const newP = food.find(service => service.id == id)
            setDetail(newP)
        }
        
      } ,[mealsId ,food])
    return (
      <>
     <div className='WebsiteNav sticky-top'><Navs></Navs></div>
        <div >
            <Container>
            <Row className=' order'>
    <Col lg={6 ,{order:'1'}} xs={12 , {order:'2'}} md={6} >





    <div className='d'>


    <div className='d-flex flex-column justify-content-start align-items-start'>
    <h1>{name}</h1>
        <br/>
        <i className='text-muted mb-2'>{description}</i>
    <div className='d-flex flex-column justify-content-start align-items-start ' >
        
       <div className='d-flex '>
       <h2 id='dh'>${price}</h2><div className="input-stepper ms-4">
  <button style={{color:'#f91944' , fontWeight:'bold'}} onClick={decrease} className="minus">-</button>
  <input id='st' type="text" value={count} />
  <button  style={{color:'#f91944' , fontWeight:'bold'}}  onClick={increase} className="plus">+</button>
</div>
       </div>
       <div className='mt-5'>
        {b==true?<button onClick={addToCart} disabled style={{backgroundColor:'#fc8ca2',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 50px', color:'white' , marginBottom:'70px' }}>
      {element}<span style={{marginLeft:'10px'}}>Added</span>
    </button>:<button onClick={addToCart} style={{backgroundColor:'#f91944',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 50px', color:'white' , marginBottom:'70px' , marginTop:'-180px'}}>
      {element}<span style={{marginLeft:'10px'}}>add</span>
    </button>}
        </div>
        </div>
       
    </div>


      
        <div style={{width:'80%' , marginTop:'10px'}}> 
        <Swiper
      spaceBetween={50}
      slidesPerView={2}
     
      navigation
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 2,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide><img  style={{height:'150px' , width:'150px' , padding:'3px'}}    src={image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px' , padding:'3px'}}   src={image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px' , padding:'3px'}}   src={image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px' , padding:'3px'}}   src={image} alt="" /></SwiperSlide>
    </Swiper>
          </div>
       </div >





    
    </Col>
    <Col className='displa-hide' lg={6 ,{order:'2'}} xs={12 ,{order:'1'}} md={6} ><img style={{height:'80%' , width:'100%' , padding:'5px'}}  src={image} alt='' /></Col>
  </Row>
            </Container>
        </div>
        <div className='mobileNav'><BottomNav></BottomNav></div>
        </>
    );
};

export default Details;