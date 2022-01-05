import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import CryptoWidget from './widgets/CryptoWidget';

const App = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  const data = {
    ask:  9474923.97,//Precio de compra reportado por el exchange, sin sumar comisiones.
    totalAsk:  9474923.97,//Precio de compra final incluyendo las comisiones de transferencia y trade.
    bid: 	9180985.07, //Precio de venta reportado por el exchange, sin restar comisiones.
    totalBid:  9180985.07,//Precio de venta final incluyendo las comisiones de transferencia y trade.
    time:  1641341098//Timestamp del momento en que fue actualizada esta cotización.
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='title-card'>App Cripto Price </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}  >
          <CryptoWidget title='BTC' data={data}/> 
        </Col>
      </Row>
    </Container>
  )
}

export default App