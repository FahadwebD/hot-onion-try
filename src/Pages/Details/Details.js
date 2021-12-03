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
SwiperCore.use([Navigation]);

const Details = () => {
    const [count , setCount] = useState(1)
    const element = <FontAwesomeIcon icon={faCartPlus} />
    const {mealsId} = useParams();
    const [food] = useMeals();
    console.log(mealsId)
  
   const increase = ()=>{
       setCount(count+1)
   }
   const decrease =()=>{
       if(count>1){
           setCount(count-1)
       }
   }
    const [detail , setDetail] = useState({});
    useEffect(()=>{
  
        if (food.length){
            const id = mealsId;
    
            const newP = food.find(service => service.id == id)
            setDetail(newP)
        }
        
      } ,[mealsId ,food])
    return (
        <div >
            <Container>
            <Row className='mt-5 order'>
    <Col lg={6 ,{order:'1'}} xs={12 , {order:'2'}} md={6} >





    <div className='d'>


    <div className='d-flex flex-column justify-content-start align-items-start'>
    <div className='d-flex flex-column justify-content-start align-items-start'>
        <h1>{detail.name}</h1>
        <br/>
        <i className='text-muted mb-2'>{detail.description}</i>
       <div className='d-flex '>
       <h2>${detail.price}</h2><div className="input-stepper ms-4">
  <button onClick={decrease} className="minus">-</button>
  <input type="text" value={count} />
  <button onClick={increase} className="plus">+</button>
</div>
       </div>
        </div>
        <div className='mt-5'>
        <button style={{backgroundColor:'#f91944',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 50px', color:'white'}}>
      {element}<span style={{marginLeft:'10px'}}>add</span>
    </button>
        </div>
    </div>


      
        <div style={{width:'80%' , marginTop:'20px'}}> 
        <Swiper
      spaceBetween={5}
      slidesPerView={2}
     
      navigation
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 2,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}    src={detail.image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}   src={detail.image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}   src={detail.image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}   src={detail.image} alt="" /></SwiperSlide>
    </Swiper>
          </div>
       </div >





    
    </Col>
    <Col lg={6 ,{order:'2'}} xs={12 ,{order:'1'}} md={6} ><img style={{height:'90%' , width:'90%'}}  src={detail.image} alt='' /></Col>
  </Row>
            </Container>
        </div>
    );
};

export default Details;