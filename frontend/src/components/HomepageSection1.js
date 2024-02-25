import React from 'react';
import '../css/HomepageSection.css'; // Pfad zu Ihrer CSS-Datei
import ImageSection1 from '../assets/images/image1.png'; //Pfad zum Bild

const HomepageSection1 = () => {
  return (
    <div className="section1">
        <div className="section1-content">
            <div className="section1-text">
                <h1>Willkommen Bei TeamCards!</h1>
                <p>Dein Spiel, Deine Helden, Deine Karte</p>
             </div>
            <img src={ImageSection1} alt="Bild" className="section1-image" />
            {/* Fügen Sie hier weitere Inhalte für den Abschnitt 1 hinzu */}
        </div>
    </div>
  );
};

export default HomepageSection1;
