import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Footer.css';

const Navbar = () => {
  return (
    <footer className="footer">
      {/* Brand name */}
      <div className="navbar-brand">
        TeamCards
      </div>

      {/* First group of nav links */}
      <div className="nav-links">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
        {/* <NavLink to="/spieler-quiz" className="nav-link">
          Spieler-Quiz
        </NavLink> */}
        <NavLink to="/foto-upload" className="nav-link">
          Foto Upload
        </NavLink>
        <NavLink to="/über-uns" className="nav-link">
          Über Uns
        </NavLink>
      </div>

      {/* Second group of nav links */}
      <div className="nav-links-2">
        <NavLink to="/impressum" className="nav-link-2">
          Impressum
        </NavLink>
        <NavLink to="/datenschutzerklärung" className="nav-link-2">
          Datenschutzerklärung
        </NavLink>
      </div>
    </footer>
  );
};
export default Navbar;
