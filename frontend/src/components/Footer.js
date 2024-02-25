import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Footer.css';

const Navbar = () => {
  return (
    <nav className="footer">
       <span className="navbar-brand">TeamCards</span>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
    </nav>
  );
};
export default Navbar;
