import '../styles/middle.top.css';
import middleImagen from '../assets/images/middle.svg';
import errorImagen from '../assets/images/error.svg';
import arrow from '../assets/images/arrow.png'
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

//start of middle, letters only
const MiddleTop = () => {
    return (
        <section className='center'>
            <h6> <span>Challenge</span>: We want you to have fun building this SPA (Single Page Application) where you can show the quotes of the most famous characters from this TV series.</h6>

            <p>
            The goal is to build the current pages:
            </p>
            <ul className='spacing'>
                <li>Home</li>
                <li>Quotes view</li>
                <li>Error page</li>
            </ul>
        </section>
    )

}

//images of middle
const MiddleImagen = () => {
    return (
        <section>
            <div className='images-container'>
                <img src={middleImagen} alt="Imagen de la izquierda" className='images' />
                <img src={errorImagen} alt="Imagen de la derecha" className='images'/>
            </div>
        </section>
    )

}

// dropdown list of goals
const ListaDesplegable = () => {
    const [mostrarLista1, setMostrarLista1] = useState(false);
    const [mostrarLista2, setMostrarLista2] = useState(false);

    const toggleLista1 = () => {
        setMostrarLista1(!mostrarLista1);
    };

    const toggleLista2 = () => {
        setMostrarLista2(!mostrarLista2);
    };

    return (
        <section className='center'>
            <Container>
                <Row>
                    <Col>
                        <div className='container d-flex align-items-center'>
                            <div className='spacing-goals'>
                                <div className="d-flex align-items-center">
                                    <p className='letter-goals'>Goals basic level</p>
                                    <button className="button" onClick={toggleLista1}>
                                        <img src={arrow} alt="Button arrow" />
                                    </button>
                                </div>
                                {mostrarLista1 && (
                                    <ul className="lista-desplegable">
                                        <li>1. User Story: Home page view</li>
                                        <li>2. User Story: Show a quote randomly for the first time (by default)</li>
                                        <li>3. User Story: Offer an input search, in which the name of any character can be written, as well as the number of quotes to show.</li>
                                        <li>4. User Story: </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='container d-flex align-items-center'>
                            <div className='spacing-goals'>
                                <div className="d-flex align-items-center">
                                    <p className='letter-goals'>Goals advanced level</p>
                                    <button className="button" onClick={toggleLista2}>
                                        <img src={arrow} alt="Button arrow" />
                                    </button>
                                </div>
                                {mostrarLista2 && (
                                    <ul className="lista-desplegable">
                                        <p>Include the basic level user stories</p>
                                        <li>1. User Story: Add audio with the Simpsons song</li>
                                        <li>2. User Story: Add Desktop version</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


// paragraph below dropdown list
const MiddleFinal = () => {
    return (
        <section className='center'>
            <p> <span className='span-middle'>Tools</span>: You can use the next tools to develop this challenge:</p>
            <ul >
                <li>Mockup: https://www.figma.com/file/R3RrsUHYYAKmm9EyxNocMj/Simpsons?type=design&node-id=0%3A1&mode=design&t=FeKkyP1NNvKtRm5m-1</li>
                <li>API: <a href="http://thesimpsonsquoteapi.glitch.me/" target="_blank">http://thesimpsonsquoteapi.glitch.me/</a></li>
            </ul>
            <p className='spacing-git span-middle'>Github repo: </p>
        </section>
    )

}
 
// drop-down list in black background below the paragraph
const MiddleBlack = () => {
    const [mostrarMenu1, setMostrarMenu1] = useState(false);
    const [mostrarMenu2, setMostrarMenu2] = useState(false);

    const toggleMenu1 = () => {
        setMostrarMenu1(!mostrarMenu1);
        if (mostrarMenu2) {
            setMostrarMenu2(false);
        }
    };

    const toggleMenu2 = () => {
        setMostrarMenu2(!mostrarMenu2);
        if (mostrarMenu1) {
            setMostrarMenu1(false);
        }
    };

    return (
        <section className='background-black center '>
            <div className='color-letter-black'>
                <button className='menu-button menu-margin-top' onClick={toggleMenu1}>What will we evaluate?
                </button>
                {mostrarMenu1 && (
                    <ul className='lista-middle'>
                        <li>JS/TS Good Practices</li>
                        <li>UX/UI development</li>
                        <li>UI responsive (Mobile First)</li>
                        <li>Reusable Components</li>
                        <li>Coding best practices</li>
                        <li>Use of the framework (ideal React Native, others: React, Angular, Vue)</li>
                        <li>State Management</li>
                        <div>
                            <p className='subtitulo-middle'>Web</p>
                            <li>HTML/CSS JS Semantic</li>
                            <li>CSS Methodologies</li>
                            <li>Styled-Components - SASS</li>
                        </div>
                        <div>
                            <p className='subtitulo-middle'>React Native</p>
                            <li>React Navigation -  Routing and Navigation (Expo)</li>
                            <li>Use UI Component libraries (optional)</li>
                            <li>Styled-Components - SASS</li>
                        </div>
                    </ul>
                )}
            </div>
            <div className='color-letter-black'>
                <button className='menu-button ' onClick={toggleMenu2}>Advices:</button>
                {mostrarMenu2 && (
                    <ul className='lista-middle'>
                        <li>Add a header component with your own logo and app name (we recommend you use FlatIcon to found the possible logo).</li>
                        <li>You can use CSS animations (we recommend you: animate.css)</li>
                        <li>Apply Mobile first design strategy</li>
                        <li>Avoid Prop drilling, use Context or a Global State Library such as Recoil, Redux, React-Query</li>
                        <li>You can use Google fonts</li>
                    </ul>
                )}
            </div>
            <div className='menu-margin-bottom'>
                
            </div>
        </section>
    );
}

// guarda una lista
const MiddleBottom = () => {
    return(
        <section className='section-middle-bottom'>
            <ul className='lista'>
                <li>Once you're completed, submit your solutions by providing URLs for both GitHub repository and live app on any hosting platform <a href='https://blogs.devchallenges.io/posts/tJ26U8MhZTPgBSRSwpqr' target='blank'>(5 Free Hosting Platform)</a> and explain briefly what you have done.</li>
                <li>As long as you fulfill all the user stories, you can give your personal touches by adding transition, using your own images, changing colors, etc</li>
                <li>Remember to put your name on the footer to prevent others from submitting your solutions.</li>
            </ul>
            <div className='contenedor'>
                <p>Let your link code and feedback</p>
                <br></br>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeaNZkq9T_xYF_3VtTsAuUttQdKbW4JgEHbM7kkj0hoK_wn6g/viewform' target='blank' className='text-link-middle'>here</a>
            </div>
        </section>
    )
}

const MiddleSection = () => {
    return (
        <div className="background">
            <MiddleTop />
            <MiddleImagen />
            <ListaDesplegable />
            <MiddleFinal />
            <MiddleBlack />
            <MiddleBottom />
        </div>
    )
    
}

export default MiddleSection;
