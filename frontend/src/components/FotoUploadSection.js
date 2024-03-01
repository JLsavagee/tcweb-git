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
           <div className="foto-upload-content">
            <div className="foto-upload-text">
              <h1>Foto Upload</h1>
            </div>
            <div className='upload-inputs'>
              <div className="name-input-container">
                <div className="input-field-name">
                  <label htmlFor="first-name">Name:</label>
                  <input type="text" name="file-name" id="name" value={fileName} onChange={handleNameChange} />
                </div>
                <div className="input-field-surname">
                  <label htmlFor="surname">Surname:</label>
                  <input type="text" name="file-surname" id="surname" value={fileSurname} onChange={handleSurnameChange} />
                </div>
              </div>
              <div className="foto-upload-tool"></div>
                <input type="file" name="file" id="files" multiple onChange={handleFileChange} />
                <button type="submit">Upload</button>
              </div>
            </div>
        </form>
    );
};

export default FotoUploadSection;