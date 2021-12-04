import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';

const Purchase = () => {
    return (
        <div className='mt-4 purch '>
            
            

            <Container>
  <Row>
    <Col style={{backgroundColor:'blue'}} md={4}><DeliveryDetails></DeliveryDetails></Col>
    <Col  md={{ span: 4, offset: 4 }}><Cart></Cart></Col>
  </Row>
</Container>
        </div>
    );
};

export default Purchase;