import React from 'react';
import Logo from './Logo';
import '../styles/Navbar.css';

const NAV_LINKS = ['Chi siamo', 'Servizi', 'Metodo', 'Perché noi'];

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <button className="cta-btn">
        Richiedi una consulenza →
      </button>
    </nav>
  );
}

export default Navbar;
