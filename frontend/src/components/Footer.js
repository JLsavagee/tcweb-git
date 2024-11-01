import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from "../assets/images/TC_Logo.png"
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='container'>
      <footer className="footer">
        <div className="navbar-brand">
          <img src={LogoImg} alt="Team-Cards.de" />
        </div>
        <div className="nav-links">
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
          {/* <NavLink to="/spieler-quiz" className="nav-link">
            Spieler-Quiz
          </NavLink> */}
          {/*<NavLink to="/foto-upload" className="nav-link">
            Foto Upload
        </NavLink>*/}
          <NavLink to="/organisatoren" className="nav-link">
            Für Organisatoren
          </NavLink>
          <NavLink to="/sponsoren" className="nav-link">
            Für Sponsoren
          </NavLink>
          <NavLink to="/über-uns" className="nav-link">
            Über Uns
          </NavLink>
          <NavLink to="/impressum" className="nav-link">
            Impressum
          </NavLink>
          <NavLink to="/datenschutzerklärung" className="nav-link">
            Datenschutzerklärung
          </NavLink>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
