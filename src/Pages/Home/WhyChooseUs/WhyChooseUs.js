import React from 'react';
import './WhyChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import person1 from '../../../images/Image/aboutImg1.png'
import person2 from '../../../images/Image/aboutImg2.png'
import person3 from '../../../images/Image/aboutImg3.png'
import deliver from '../../../images/ICON/Group 204.png'
import homed from '../../../images/ICON/output-onlinepngtools (1).png'
import responder from '../../../images/ICON/output-onlinepngtools (2).png'

const WhyChooseUs = () => {
    const element = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
           <div className='d-flex flex-column align-items-start justify-content-start p-4 container' > 
               <div><h1>Why Choose Us</h1></div>
               <div><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam alias dolore rem maiores</span></div>
           </div>
            <div>
            <ul className="chooseUsCards">
  <li>
    <a href="" className="chooseUsCard">
      <img src={person1} className="chooseUsCard__image" alt="" />
      <div className="chooseUsCard__overlay">
        <div className="chooseUsCard__header">
                           
          <img className="chooseUsCard__thumb" src={deliver} alt="" />
          <div className="chooseUsCard__header-text">
            <h3 className="chooseUsCard__title">Fast Delivery</h3>            
            <span className="chooseUsCard__status">see more {element}</span>
          </div>
        </div>
        <p className="chooseUsCard__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="chooseUsCard">
      <img src={person2} className="chooseUsCard__image" alt="" />
      <div className="chooseUsCard__overlay">        
        <div className="chooseUsCard__header">               
          <img className="chooseUsCard__thumb" src={homed} alt="" />
          <div className="chooseUsCard__header-text">
            <h3 className="chooseUsCard__title">Home Delivery</h3>
            <span className="chooseUsCard__status">see more {element}</span>
          </div>
        </div>
        <p className="chooseUsCard__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="chooseUsCard">
      <img src={person3} className="chooseUsCard__image" alt="" />
      <div className="chooseUsCard__overlay">
        <div className="chooseUsCard__header">                
          <img className="chooseUsCard__thumb" src={responder} alt="" />
          <div className="chooseUsCard__header-text">
            <h3 className="chooseUsCard__title">A good auto responder</h3>           
            <span className="chooseUsCard__status">see more {element}</span>
          </div>
        </div>
        <p className="chooseUsCard__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  
</ul>
            </div>
        </div>
    );
};

export default WhyChooseUs;