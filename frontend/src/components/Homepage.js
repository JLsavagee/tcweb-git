import React from 'react';
import '../css/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar.js';
import Image1 from '../assets/images/JUSTIN_YAKANI.jpg'
import Image2 from '../assets/images/PHILLIP_SCHULZE.jpg'
import Image3 from '../assets/images/CHARLIE_WIESTMANN.jpg'
import Image4 from '../assets/images/Teamcards.de Jojo 1.jpg';
import Image5 from '../assets/images/YAMAL_ARANGO.jpg';

import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';


function Homepage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/organisatoren');
  };
  const handleClick2 = () => {
    navigate('/sponsoren');
  };

  return (
    <div>
      <Navbar />
      <div className='container_1'>
        <div className="hp-section1">
          <div className="hp-section1-text">
              <h1>Dein Fußball Erlebnis wird</h1>
              <h2>ERINNERUNG!</h2>
              <h3>Individuelle Sammelkarten für deine Events</h3>
          </div>
          <div className='hp-section1-image'>
            <img src={Image4} alt="Bild" /> 
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='hp-section2'>
         <div className='hp-example-pictures'>
            <img src={Image1} alt="Bild"  /> 
            <img src={Image3} alt="Bild"  /> 
            <img src={Image2} alt="Bild"  /> 
            <img src={Image5} alt="Bild"  /> 
          </div>
        </div>
        <div className='hp-contact'>
          <h1>Ein Karten Paket für Dich!</h1>
          <p> Hast Du Teamcards in Action gesehen und bist an einem Karten Paket für Deinen Event interessiert?</p>
          <p>Schreibe uns einfach eine E-Mail mit Deiner Anfrage und wir melden uns bei Dir mit einem unverbindlichen Angebot!</p>
          <p> E-Mail: info@team-cards.de</p>
        </div>
      </div>
      <div className='container'>
        <div className="hp-section3">
          <div className='hp-section3-headline'>
            <h2>So funktioniert's</h2>
          </div>
          <div className='hp-box-1'>
            <FontAwesomeIcon icon={faIdCard} className='hp-icon'/>
            <h1>Name, Foto, Position</h1>
            <p>Über unsere Upload Funktion kannst du ganz einfach die Daten des Spielers angeben.</p>
            <p>Minimaler Aufwand für alle beteiligten!</p>
          </div>
          <div className='hp-box-2'>
            <FontAwesomeIcon icon={faStar} className='hp-icon'/>
            <h1>Drucken, Fertig, Los!</h1>
            <p>Die kleinen Stars werden im hochwertigen Sammelkarten Format aussehen wie ihre Idole! </p>
            <p>Möchtest du individuelle Karten auf deinem Event austeilen?</p>
            <button onClick={handleClick}>Für Organisatoren</button>
          </div>
          <div className='hp-box-3'>
            <FontAwesomeIcon icon={faFaceLaughBeam} className='hp-icon'/>
            <h1>Fußball, Freude, kleine Stars!</h1>
            <p>Seien Sie der Vorreiter mit individuellen Fußballkarten als Teil Ihres Sponsoren-Pakets.</p>
            <p>Sind Sie interessiert daran Sammelkarten als Sponsorenleistung anzubieten?</p>
            <button onClick={handleClick2}>Für Sponsoren</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;