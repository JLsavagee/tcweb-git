import React from 'react';
import '../css/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar.js';
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
          <h2>So funktioniert's</h2>
        </div>
        <div className='box-1'>
          <FontAwesomeIcon icon={faIdCard} className='icon'/>
          <h1>Name, Foto, Position</h1>
          <p>Über unsere Upload Funktion kannst du ganz einfach die Daten des Spielers angeben.</p>
          <p>Minimaler Aufwand für alle beteiligten!</p>
        </div>
        <div className='box-2'>
          <FontAwesomeIcon icon={faStar} className='icon'/>
          <h1>Drucken, Fertig, Los!</h1>
          <p>Die kleinen Stars werden im hochwertigen Sammelkarten Format aussehen wie ihre Idole! </p>
          <p>Möchtest du individuelle Karten auf deinem Event austeilen?</p>
          <button>Für Organisatoren</button>
        </div>
        <div className='box-3'>
          <FontAwesomeIcon icon={faFaceLaughBeam} className='icon'/>
          <h1>Fußball, Freude, kleine Stars!</h1>
          <p>Seien Sie der Vorreiter mit individuellen Fußballkarten als Teil Ihres Sponsoren-Pakets.</p>
          <p>Sind Sie interessiert daran Sammelkarten als Sponsorenleistung anzubieten?</p>
          <button>Für Sponsoren</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;