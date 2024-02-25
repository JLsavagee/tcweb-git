import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HomepageSection.css'; // Path to your CSS file
import ImageSection3 from '../assets/images/Teamcards.de Jojo 1.jpg'; // Path to the image

const HomepageSection3 = () => {
  let navigate = useNavigate();

  const goToFotoUpload = () => {
    navigate('/foto-upload'); // Replace '/foto-upload' with the actual route path
  };

  return (
    <div className="section3">
      <div className="section3-content">
        <img src={ImageSection3} alt="Bild" className="section3-image" />
        <div className="section3-text">
          <h2>Foto Upload - Fertig!</h2>
          <p>Lade einfach ein In-Action-Bild von dir hoch und erhalte die fertige Karte bei Beginn deines Camps.</p>
          <button className="section-button" onClick={goToFotoUpload}>Zum Foto-Upload</button>
        </div>
        {/* Additional content for section 3 can be added here */}
      </div>
    </div>
  );
};

export default HomepageSection3;
