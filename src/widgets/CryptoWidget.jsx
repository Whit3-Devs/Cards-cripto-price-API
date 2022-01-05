/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import {
    Card
} from 'react-bootstrap';
import '../css/style.css'

const CryptoWidget = ({coin}) => {
    const url = `https://api.coingecko.com/api/v3/coins/${coin}`
    const [crypto, setCrypto] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setCrypto(responseJSON)
        console.log(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
        {
            !crypto ? 'Cargando...' :
            <Card className='card mt-3'>
                <Card.Title>
                    <img src={crypto.image.small}/>{crypto.symbol}
                </Card.Title>
                <Card.Body>
                    <h3><strong>{"$"+crypto.market_data.current_price.usd}</strong></h3>
                </Card.Body>
            </Card>
        }
        </>
    )
}

export default CryptoWidget
