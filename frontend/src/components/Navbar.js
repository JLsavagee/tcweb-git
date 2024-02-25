import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'; // Pfad zu deiner CSS-Datei anpassen, falls nötig

const Navbar = () => {
  return (
    <nav className="navbar">
       <span className="navbar-brand">TeamCards</span>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/foto-upload" className="nav-link">
          Foto Upload
        </NavLink>
    </nav>
  );
};
export default Navbar;