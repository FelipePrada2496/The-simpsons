import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/images/logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? 'sticky' : ''}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${isSticky ? 'text-white' : ''}`} href="#">
          <img src={logo} alt="Logo" width="50" height="50" className="mr-2" />
          Katas UI
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://sites.google.com/globant.com/tp-dojo/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="https://sites.google.com/globant.com/tp-dojo/about-katas">About Katas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="https://sites.google.com/globant.com/tp-dojo/welcome-to-dojo">Welcome dojo</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false">Challenge</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/challenges/challenges-web-ui">Chanllenges Web UI</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false">Wiki</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/css">CSS</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/javascript">Javascript</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/react">React</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/react-native">React Native</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/testing">Testing</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/design-patterns">Design Patterns</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/architecture">Architecture</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/animations">Animations</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/fonts">Fonts</a></li>
              <li><a className="dropdown-item" href="https://sites.google.com/globant.com/tp-dojo/wiki/tools">Tools</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href='https://sites.google.com/globant.com/tp-dojo/blog'>blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href='https://sites.google.com/globant.com/tp-dojo/faq'>FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
