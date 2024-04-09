// FotoUploadSection.js in frontend/src/components

import React, { useState } from 'react';
import '../css/FotoUploadSection.css'

const FotoUploadSection = () => {
    const [fileName, setFileName] = useState('');
    const [fileSurname, setFileSurname] = useState('');
    const [files, setFiles] = useState(null);

    const handleFileChange = (event) => {
        setFiles(event.target.files);
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

    return (
        <form className="foto-upload" onSubmit={handleSubmit}>
          <div className="foto-upload-sidebar">
  
          </div>
          
          <div className='name-box'>
            <div className='name-instruction'>
              <h1>Schritt 1</h1>
              <a1>Bitte geben Sie den Vor- und Nachnamen des Spielers ein</a1>
            </div>

            <div className="input-field-name">
              <label htmlFor="first-name">Name</label>
              <input type="text" name="file-name" id="name" value={fileName} onChange={handleNameChange} />
            </div>
            <div className="input-field-surname">
              <label htmlFor="surname">Nachname</label>
              <input type="text" name="file-surname" id="surname" value={fileSurname} onChange={handleSurnameChange} />
            </div>
          </div>

          <div className='upload-box'>
            <div className='upload-instruction'>
              <h1>Schritt 3</h1>
              <a1> Bitte laden Sie das Foto hoch, das auf der Karte abgebildet werden soll</a1>
            </div>
            <div className="upload-feature">
              <input type="file" name="file" id="files" multiple onChange={handleFileChange} />
              <button type="submit">Upload</button>
            </div>
          </div>

          <div className='nummer-box'>
            <div className='nummer-instruction'>
              <h1>Schritt 3</h1>
              <a1>Wählen Sie nun die Postition und die Trikotnummer, die auf der Karte abgebildet werden soll</a1>
            </div>

            <div className="input-field-nummer">
              <label htmlFor="surname">Trikotnummer</label>
              <input type="text"/>
            </div>

           <div className="position-dropdown">
              <button class="dropbtn">Position</button>
              <div class="dropdown-content">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
             </div>
            </div>
          </div>
        </form>
    );
};

export default FotoUploadSection;