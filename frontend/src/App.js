import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage'; // Deine Home-Komponente
import FotoUpload from './components/FotoUpload';
import Impressum from './components/Impressum';
import SpielerQuiz from './components/SpielerQuiz';
import ÜberUns from './components/ÜberUns'
import Datenschutzerklärung from './components/Datenschutzerklärung';
import Organisatoren from './components/Organisatoren';
import Sponsoren from './components/Sponsoren';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/foto-upload' element={<FotoUpload />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/spieler-quiz' element={<SpielerQuiz />} />
        <Route path='/über-uns' element={<ÜberUns />} />
        <Route path='/datenschutzerklärung' element={<Datenschutzerklärung />} />
        <Route path='/organisatoren' element={<Organisatoren />} />
        <Route path='/sponsoren' element={<Sponsoren />} />
      </Routes>
    </Router>
  );
};

export default App;
