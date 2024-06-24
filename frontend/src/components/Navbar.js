import React from 'react';
import { NavLink } from 'react-router-dom';
import {useRef} from "react";
import {FaBars} from "react-icons/fa";
import '../css/Navbar.css'; // Pfad zu deiner CSS-Datei anpassen, falls nötig

function Navbar()  {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav")
    }
  return (
  <div className='container_1'>
    <span className="navbar-brand">Team-cards.de</span>
      <nav ref={navRef} className="navbar">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          {/* <NavLink to="/spieler-quiz" className="nav-link">
            Spieler-Quiz
          </NavLink> */}
          <NavLink to="/organisatoren" className="nav-link">
            Für Organisatoren
          </NavLink>
          <NavLink to="/sponsoren" className="nav-link">
            Für Sponsoren
          </NavLink>
          {/*<NavLink to="/foto-upload" className="nav-link">
            Foto Upload
        </NavLink>*/}
          <NavLink to="/über-uns" className="nav-link">
            Über Uns
          </NavLink>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};
export default Navbar;