import React from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../../images/bannerbackground.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    const element = <FontAwesomeIcon style={{fontSize:'1vw'}} icon={faSearch} />
    return (
 <Card className="bg-white text-black w-100" style={{top:'-80px'}}>
  <Card.Img src={banner} alt="Card image" />
  <Card.ImgOverlay>
  <h4 style={{position:'relative' , top:'40%' , fontSize:'4vw'}}>Best Food Waiting For Your Belly</h4>
  <InputGroup className=" mb-5 " style={{top:'41%' , left:'39%' , width:'20vw' , height:'1vw'}}>
     
    <FormControl
      placeholder="food category"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{borderRadius: '15px 15px 15px 15px' , position:'relative', border:'none'}}
    />
    <Button  style={{width:'1vw',backgroundColor:'#f91944',border:'none' , borderRadius: '15px 15px 15px 15px' ,left:'90%' , position:'absolute' }}>
      {element}
    </Button>
  </InputGroup>
    
  </Card.ImgOverlay>
</Card>
        
    );
};

export default Banner;