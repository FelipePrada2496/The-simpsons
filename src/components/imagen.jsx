import React from 'react';
import imagen from '../assets/images/Los-Simpson.png'
import '../styles/imagen.css'; 
const Imagen =() =>{
    return(
        <div className="imagen-container">
            <img src={imagen} alt="Imagen de fondo" className="imagen-background" />
            
            <h1>The Simpsons Quotes</h1>
        </div>

    )
}
export default Imagen;