import '../styles/footer.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Footer = () => {

    const [quote, setQuote] = useState('');
    const [character, setCharacter] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
        const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?character=bart%20simpson');
        const data = response.data[0]; 
        setQuote(data.quote);
        setCharacter(data.character);
        } catch (error) {
        console.error('Error al obtener la cita:', error);
        }
    };


    return(
        <section className='background-footer footer-letter'>
            <div >
                <h1>Api consumida</h1>
                <h3>Simpsons Quote</h3>
                <p>Character: {character}</p>
                <p>Quote: {quote}</p>
            </div>
            <h4 className='nombre'>Elaborado por:Andres Felipe Prada Borja</h4>
            <h4 className='gracias'>Gracias por ver</h4>
        </section>
    )
}




export default Footer;