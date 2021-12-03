import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useMeals from '../../hooks/useMeals';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Details = () => {

    const element = <FontAwesomeIcon icon={faCartPlus} />
    const {mealsId} = useParams();
    const [food] = useMeals();
    console.log(mealsId)
  

    const [detail , setDetail] = useState({});
    useEffect(()=>{
  
        if (food.length){
            const id = mealsId;
    
            const newP = food.find(service => service.id == id)
            setDetail(newP)
        }
        
      } ,[mealsId ,food])
    return (
        <div>
            <Container>
            <Row className='mt-5 order'>
    <Col lg={6 ,{order:'1'}} xs={12 , {order:'2'}} md={6} >
       <div  className='d-flex flex-column justify-content-center align-items-center' >
       <div >
        <h1>{detail.name}</h1>
        <br/>
        <i>{detail.description}</i>
        </div>
        <div className='mt-5'>
        <button style={{backgroundColor:'#f91944',border:'none' , borderRadius: '20px 20px 20px 20px' , padding:'10px 50px', color:'white'}}>
      {element}<span style={{marginLeft:'10px'}}>add</span>
    </button>
        </div>
        <div style={{width:'80%'}}> 
        <Swiper
      spaceBetween={30}
      slidesPerView={2}
      centeredSlides
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
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}    src={detail.image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}   src={detail.image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}   src={detail.image} alt="" /></SwiperSlide>
      <SwiperSlide><img  style={{height:'150px' , width:'150px'}}   src={detail.image} alt="" /></SwiperSlide>
    </Swiper>
          </div>
       </div>
    
    </Col>
    <Col lg={6 ,{order:'2'}} xs={12 ,{order:'1'}} md={6} ><img style={{height:'90%' , width:'90%'}}  src={detail.image} alt='' /></Col>
  </Row>
            </Container>
        </div>
    );
};

export default Details;