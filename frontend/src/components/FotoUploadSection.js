// FotoUploadSection.js in frontend/src/components

import React, { useState } from 'react';
import '../css/FotoUploadSection.css'
import axios from 'axios' 

const FotoUploadSection = () => {
    const [fileName, setFileName] = useState('');
    const [fileSurname, setFileSurname] = useState('');
    const [files, setFiles] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleNameChange = (event) => {
        setFileName(event.target.value);
    };

    const handleSurnameChange = (event) => {
      setFileSurname(event.target.value);
  }; 
    const handleSubmit = async (event) => {
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
        try {
          const response = await axios.post('http://localhost:5001/upload', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          // Assuming the backend responds with the path to the uploaded file(s)
          // Here you might need to adjust depending on how your backend responds
          // For example, if it returns the filename of the first uploaded file:
          if (response.data && response.data.files && response.data.files.length > 0) {
            const uploadedFilename = response.data.files[0].newFilename;
            setPreviewUrl(`http://localhost:5001/processed_files/${uploadedFilename}`);
            console.loc(uploadedFilename)
        }
        
    } catch (error) {
        console.error('Error:', error);
      }
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
                {previewUrl && <img src={previewUrl} alt="Preview" className="upload-preview" />}
              </div>
            </div>
        </form>
    );
};

export default FotoUploadSection;