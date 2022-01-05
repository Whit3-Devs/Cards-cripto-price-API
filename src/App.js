import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import CryptoWidget from './widgets/CryptoWidget';
import DollarWidget from './widgets/DollarWidget';

const App = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='title-card'>App Cripto Price </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget coin='bitcoin'/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget coin='ethereum'/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget coin='binancecoin'/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget coin='solana'/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <DollarWidget /> 
        </Col>
      </Row>
    </Container>
  )
}

export default App