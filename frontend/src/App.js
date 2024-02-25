import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage'; // Deine Home-Komponente
import FotoUpload from './components/FotoUpload';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/foto-upload' element={<FotoUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
