import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.jsx'; 
import Imagen from './imagen.jsx';
import Middle from './middle.jsx';
import MiddleSection from './middle.top.jsx';
import MiddleDown from './middle.down.jsx';
import Footer from './footer.jsx'
import QuoteComponent from './api.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Navbar /> 
    <Imagen />
    <Middle />
    <MiddleSection />
    <MiddleDown />
    <Footer />
    <QuoteComponent />
  </React.StrictMode>,
  document.getElementById('root')
);


