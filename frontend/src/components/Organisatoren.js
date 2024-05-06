import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import "../css/Organisatoren.css"



function Organisatoren() {
    return(
        <div>
            <Navbar />
                <div className='pitch-section'>
                    <div className='pitch-headline'>
                        <h2>Warum Sammelkarten?</h2>
                    </div>

                    <div className='obox-1'>
                        <h1>Persönliches Erinnerungsstück</h1>
                        <p>Besonderer Wert als Erinnerung an die Zeit im Camp</p>
                    </div>

                    <div className='obox-2'>
                        <h1>Vereinsgefühl</h1>
                        <p>Einzigartige Platzierung deines Events in der lokalen Gemeinschaft</p>
                    </div>

                    <div className='obox-3'>
                        <h1>Inspiration und Motivation</h1>
                        <p>Die Kinder sind kleine Stars, stärken ihr Selbstbewusstsein und die Beziehung zum Sport</p>
                    </div>

                    <div className='obox-4'>
                        <h1>Spielerische Interaktion und soziale Bindung</h1>
                        <p>Karten steigern Interaktion und Gemeinschaftsgefühl und fördert die sozialen Fähigkeiten der Teilnehmer</p>
                    </div>
                </div>

                <div className='prozess-section'>
                    <div className='sidebar'>
                    </div>
                    <div className='circle-1'>
                        <FontAwesomeIcon icon={faCamera} className="icon" />
                    </div>
                    <div className='step1'>
                        <h1>1. Spieler Fotos</h1>
                        <p>Zu Beginn des Camps wird ein Bild jedes Spielers sicher auf unserer Website hochgeladen, mit Namen, Trikotnummer und Position versehen</p>
                    </div>
                    <div className='circle-2'>
                        <FontAwesomeIcon icon={faPencil} className='icon' />
                    </div>
                    <div className='step2'>
                        <h1>2. Erstellung der Profi Karten</h1>
                        <p>Du wählst ein individuelles Design aus unseren Vorschlägen und wir versehen es mit den jeweiligen Daten der Spieler, deinem Vereinswappen und Sponsoren</p>
                    </div>
                    <div className='circle-3'>
                        <FontAwesomeIcon icon={faPrint} className="icon" />
                    </div>
                    <div className='step3'>
                        <h1>3. Druck und Verpackung</h1>
                        <p>Bei unserer Druckerie werden die Karten hochwertig gedruckt und bei Wunsch in Reißverpackung verpackt</p>
                    </div>
                    <div className='circle-4'>
                        <FontAwesomeIcon icon={faTruckFast} className="icon" />
                    </div>
                    <div className='step4'>
                        <h1>4. lieferung der Karten</h1>
                        <p>Am gewünschten Liefertag liefern wir die Karten der kleinen Stars direkt zu dir</p>
                    </div>
                </div>
            <Footer />
        </div>

    );
}
export default Organisatoren;