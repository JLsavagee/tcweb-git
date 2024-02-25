import React, { useState } from 'react';
import "../css/FotoUploadSection.css";

const NameInput = () => {
    const [firstName, setFirstName] = useState('');
    const[surname, setSurname] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

  return (
    <div className="name-input-container">
        <div className="input-field-name">
            <label htmlFor="first-name">Name:</label>
            {/* Directly update parent's state on change */}
            <input type="text" id="first-name" value={firstName} onChange={handleFirstNameChange}/>
        </div>
        <div className="input-field-surname">
            <label htmlFor="surname">Surname:</label>
            {/* Directly update parent's state on change */}
            <input type="text" id="surname" value={surname} onChange={handleSurnameChange}/>
        </div>
    </div>
 );
};

export default NameInput;
