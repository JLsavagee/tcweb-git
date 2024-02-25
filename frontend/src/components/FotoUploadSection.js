import React, { useState } from 'react';
import axios from 'axios'; // You need to install axios with 'npm install axios'
import NameInput from './NameInput.js'

const FotoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);


      try {
        const response = await axios.post('http://localhost:5001/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        // Handle response...
        console.log(response.data);
        alert('Upload successful');
      } catch (error) {
        // Handle error...
        console.error(error);
        alert('Upload failed');
      }
    }
  };

  return (
    <form className="foto-upload" onSubmit={handleFormSubmit}>
      <div className="foto-upload-content">
        <div className="foto-upload-text">
          <h1>Foto Upload</h1>
        </div>
        <div className='upload-inputs'>
          <NameInput />
          <div className="foto-upload-tool">
            <input type="file" onChange={handleFileChange} />
            <button type="button" onClick={handleUpload}>Upload</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FotoUpload;