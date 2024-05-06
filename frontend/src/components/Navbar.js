import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'; // Pfad zu deiner CSS-Datei anpassen, falls nötig

const Navbar = () => {
  return (
    <nav className="navbar">
       <span className="navbar-brand">Team-cards.de</span>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        {/* <NavLink to="/spieler-quiz" className="nav-link">
          Spieler-Quiz
        </NavLink> */}
        <NavLink to="/organisatoren" className="nav-link">
          Für Organisatoren
        </NavLink>
        <NavLink to="/foto-upload" className="nav-link">
          Foto Upload
        </NavLink>
        <NavLink to="/über-uns" className="nav-link">
          Über Uns
        </NavLink>
    </nav>
  );
};
export default Navbar;