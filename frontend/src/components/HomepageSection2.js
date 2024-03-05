import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HomepageSection.css'; // Pfad zu Ihrer CSS-Datei
import ImageSection2 from '../assets/images/DALL·E 2023-12-20 02.42.31 - A photorealistic image of a young boy soccer player celebrating a goal, in a horizontal orientation. The boy is depicted in a realistic style, wearing.png'; //Pfad zum Bild

const HomepageSection2 = () => {
    let navigate = useNavigate();
  
    const goToSpielerQuiz = () => {
      navigate('/spieler-quiz');
    };
  return (
     <div className="section2">
        <div className="section2-content">
            <div className="section2-text">
                <h2>Du Bist Die Legende!</h2>
                <p>Fühl dich wie ein Profi und erschaffe deine eigene Karte zum spielen, sammeln und tauschen. Weißt du welchem Profi dein Spiel-Style ähnelt?</p>
                <button className="section-button" onClick={goToSpielerQuiz}>Finde deinen Spiel-Style heraus!</button>
             </div>
            <img src={ImageSection2} alt="Bild" className="section2-image" />
            {/* Fügen Sie hier weitere Inhalte für den Abschnitt 1 hinzu */}
        </div>
    </div>
  );
};

export default HomepageSection2;
