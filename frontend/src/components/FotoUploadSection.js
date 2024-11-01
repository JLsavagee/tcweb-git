// FotoUploadSection.js in frontend/src/components

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import beispielImage from "../assets/images/Teamcards.de Jojo 1.jpg";
import '../css/FotoUploadSection.css'

const FotoUploadSection = () => {
    const [fileName, setFileName] = useState('');
    const [fileSurname, setFileSurname] = useState('');
    const [files, setFiles] = useState(null);
    const [trikotnummer, setTrikotnummer] = useState('');
    const [position, setPosition] = useState('');

    const handleFileChange = (event) => {
        setFiles(event.target.files);
        setFiles(URL.createObjectURL(event.target.files[0]))
    };

    const handleNameChange = (event) => {
        setFileName(event.target.value);
    };

    const handleSurnameChange = (event) => {
      setFileSurname(event.target.value);
  }; 
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission

        const formData = new FormData();
        formData.append("name", fileName);
        formData.append("surname", fileSurname);
        formData.append("position", position);
        formData.append("trikotnummer", trikotnummer);

        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }
        }

        // Adjust the fetch URL to your backend endpoint
        fetch('http://localhost:5001/upload', {
            method: 'POST',
            body: formData, // Payload is formData object
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

    const handleTrikotnummerChange = (event) => {
      setTrikotnummer(event.target.value);
    };

    const handlePositionChange = (event) => {
      setPosition(event.target.value);
    };


    return (
        <form className="foto-upload" onSubmit={handleSubmit}>
          <div className="foto-upload-sidebar-box">
            <div className='foto-upload-sidebar'>
            </div>
            <div className='fcircle-1'>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <div className='fcircle-2'>
            <FontAwesomeIcon icon={faFileArrowUp} className='icon' />
            </div>
            <div className='fcircle-3'>
              <FontAwesomeIcon icon={faFutbol} className="icon" />
            </div>
            <div className='fcircle-4'>
              <FontAwesomeIcon icon={faClipboardCheck} className="icon" />
            </div>
  
          </div>
          
          <div className='name-box'>
            <div className='name-instruction'>
              <h1>Schritt 1</h1>
              <p>Bitte geben Sie den Vor- und Nachnamen des Spielers ein</p>
            </div>
            <div className="input-field-names">
              <div className='name-container'>
                <label htmlFor="first-name">Name</label>
                <input type="text" name="file-name" id="name" value={fileName} onChange={handleNameChange} />
              </div>
              <div className='surname-container'>
                <label htmlFor="surname">Nachname</label>
                <input type="text" name="file-surname" id="surname" value={fileSurname} onChange={handleSurnameChange} />
              </div>
            </div>
          </div>

          <div className='upload-box'>
            <div className='upload-instruction'>
              <h1>Schritt 2</h1>
              <p> Bitte laden Sie das Foto hoch, das auf der Karte abgebildet werden soll</p>
            </div>
            <label className="upload-feature">
              <input type="file" name="file" id="files" multiple onChange={handleFileChange} />
              Datei Auswählen
            </label>
            <div className='bild-preview'>
              <img src={files} alt='preview'/>
            </div>
          </div>

          <div className='nummer-box'>
            <div className='nummer-instruction'>
              <h1>Schritt 3</h1>
              <a1>Wählen Sie nun die Postition und die Trikotnummer, die auf der Karte abgebildet werden soll</a1>
            </div>

            <div className="input-field-nummer">
              <label htmlFor="surname">Trikotnummer</label>
              <input type="text" name="trikotnnummer" id="nummer" value={trikotnummer} onChange={handleTrikotnummerChange} />
            </div>

            <div className="position-dropdown">
              <label>Bitte wähle die Position des Spielers:</label>
                <select value={position} onChange={handlePositionChange}>
                  <option value="stuermer">Stürmer</option>
                  <option value="Mittelfeld">Mittelfeld</option>
                  <option value="Abwehr">Abwehr</option>
                  <option value="Torwart">Torwart</option>
                </select>
             </div>
          </div>

          <div className='check-box'>
            <div className='check-instruction'>
              <h1>Überprüfe deine Eingaben</h1>
              <p>Bitte überprüfe alle Angaben auf ihre Richtigkeit. Dies wird auf der Karte wie im Beispiel aufgedruckt.</p>
            </div>

            <div className='beispiel-bild'>
              <img src={beispielImage} alt="Beispiel-Bild" />
              <button type="submit">Absenden</button>
            </div>

            <div className='eingaben'>
              <li>Name: {fileName} {fileSurname}</li>
              <li>Trikotnummer: {trikotnummer}</li>
              <li>Position: {position}</li>


            </div>
          </div>
        </form>
    );
};

export default FotoUploadSection;