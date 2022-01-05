import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';
import '../css/style.css'

const CryptoWidget = ({id, title, data}) => {
    const { ask } = data;
    return (
        <>
            <Card className='mt-3 white'>
                <Card.Title>
                    <h4 className='mt-3'>{title}</h4>
                </Card.Title>
                <Card.Body>
                    <h2><strong>{"$"+ask}</strong></h2>
                </Card.Body>
            </Card>
        </>
    )
}

export default CryptoWidget
