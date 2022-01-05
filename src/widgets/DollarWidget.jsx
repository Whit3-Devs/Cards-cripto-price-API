import React, { useState,useEffect } from 'react';
import {
    Card
} from 'react-bootstrap';
import '../css/style.css'

const DollarWidget = () => {
    const url = 'https://criptoya.com/api/dolar'
    const [dollar, setDollar] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setDollar(responseJSON)
        console.log(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <Card className='card mt-3'>
                <Card.Title>
                    <h4 className='mt-3'>Dolar</h4>
                </Card.Title>
                <Card.Body>
                    {
                        !dollar ? 'Cargando...' :
                        <>
                            <p>Oficial</p>
                            <h2><strong>{"$"+dollar.oficial}</strong></h2>
                            <p>Solidario</p>
                            <h2><strong>{"$"+dollar.solidario}</strong></h2>
                            <p>Blue</p>
                            <h2><strong>{"$"+dollar.blue}</strong></h2>
                        </>
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default DollarWidget