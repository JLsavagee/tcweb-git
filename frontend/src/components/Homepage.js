import React from 'react';
import '../css/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar.js';
import Image1 from '../assets/images/blank_pauli.png';
import Image2 from '../assets/images/Ju_pokal.pdf';
import Image3 from '../assets/images/blank_bremen.png';
import Image4 from '../assets/images/Teamcards.de Jojo 1.jpg';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer.js';


function Homepage() {
  return (
    <div>
      <Navbar />

      <div className="section1">
        <div className="section1-text">
            <h1>Dein Fußball Erlebnis wird</h1>
            <h2>ERINNERUNG!</h2>
            <h3>Individuelle Sammelkarten für deine Events</h3>
        </div>
        <div className='section1-image'>
          <img src={Image4} alt="Bild" className="section2-image" /> 
        </div>
      </div>

      <div className='example-pictures'>
          <img src={Image4} alt="Bild" className="section2-image" /> 
          <img src={Image4} alt="Bild" className="section2-image" /> 
          <img src={Image4} alt="Bild" className="section2-image" /> 
          <img src={Image4} alt="Bild" className="section2-image" /> 
      </div>

      <div className="section3">
        <div className='section3-headline'>
          <h1>So funktioniert's</h1>
        </div>
        <div className='box-1'>
          <FontAwesomeIcon icon={faIdCard} className='icon'/>
          <h3>Name, Foto, Position</h3>
          <h4>Den Rest machen Wir!</h4>
          <p>Über unsere Upload Funktion kannst du ganz einfach die Daten des Spielers angeben.</p>
        </div>
        <div className='box-2'>
          <FontAwesomeIcon icon={faStar} className='icon'/>
          <a>Headline</a>
          <p>Text</p>
        </div>
        <div className='box-3'>
          <FontAwesomeIcon icon={faFaceLaughBeam} className='icon'/>
          <a>Headline</a>
          <p>Text</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;