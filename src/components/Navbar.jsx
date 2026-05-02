import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import '../styles/Navbar.css';

const NAV_LINKS = ['Chi siamo', 'Servizi', 'Metodo', 'Perché noi'];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <Logo isScrolled={isScrolled} />

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
