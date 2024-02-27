import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/api.css'

function QuoteComponent() {
  const [quotes, setQuotes] = useState([0]);

  useEffect(() => {
    fetchQuotes();
  }, [0]); // <-- arreglo vacío para ejecutar una vez al montar

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');
      setQuotes(response.data);
    } catch (error) {
      console.error('Error al obtener las citas:', error);
    }
  };

  return (
    <div className='center-api'>
      {quotes.map((quote, index) => (
        <div key={index}>
          <h5 className='subtitulo-api'>Aqui se consume una segunda api</h5>
          <h2 className='letter-api'>Simpsons Quotes</h2>
          <p className='contenido-api'>Character: {quote.character}</p>
          <p className='contenido-api'>Quote: {quote.quote}</p>
          {quote.image && <img src={quote.image} alt={quote.character} />}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default QuoteComponent;


