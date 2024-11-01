import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faPersonRays } from '@fortawesome/free-solid-svg-icons';
import '../css/Sponsoren.css'

function Sponsoren() {
    return(
        <div>
            <Navbar />
                <div className='container'>
                    <div className='sponsoren-headline'>
                        <h1>
                            Das Plus für jedes Sponsoren-Paket: 
                            <br />Personalisierte Fußball Sammelkarten!
                        </h1>                
                    </div>
                    <div className='sponsoren-pitch'>
                        <div className='sponsoren-sidebar'>
                        </div>
                        <div className='scircle-1'>
                            <FontAwesomeIcon icon={faHeart} className="s-icon" />
                        </div>
                        <div className='sbox-1'>
                            <h1>Lokale Verbundenheit</h1>
                            <p>Fußball geht über den Spielfeldrand hinaus. Stärken Sie Ihre lokale Markenpräsent durch Kooperation mit örtlichen Fußball Events</p>
                        </div>
                        <div className='scircle-2'>
                            <FontAwesomeIcon icon={faRecycle} className='s-icon' />
                        </div>
                        <div className='sbox-2'>
                            <h1>Wiederholte Sichtbarkeit</h1>
                            <p>Bleiben Sie mit den Fußballkarten über den Sportplatz hinaus präsent im Alltag Ihrer Kunden und schaffen Sie eine anhaltende Kundenbeziehung</p>
                        </div>
                        <div className='scircle-3'>
                            <FontAwesomeIcon icon={faHandshake} className="s-icon" />
                        </div>
                        <div className='sbox-3'>
                            <h1>Gemeinschaftsengagement</h1>
                            <p>Zeigen Sie lokales Engagement indem Sie den Fußball der Refion unterstützen und Spiel- und Sammelspaß zu dem Event beitragen</p>
                        </div>
                        <div className='scircle-4'>
                            <FontAwesomeIcon icon={faPersonRays} className="s-icon" />
                        </div>
                        <div className='sbox-4'>
                            <h1>Stehen Sie nicht am Spielfeldrand!</h1>
                            <p>...sondern mitten im Geschehen. Sichern Sie sich die personalisierten Fußballkarten als exklusiver Sponsor und schaggen Sie ein innovatives Werbeerlebnis für Ihre Marke</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}
export default Sponsoren;