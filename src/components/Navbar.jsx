import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Navbar.css';

const NAV_LINKS = ['Chi siamo', 'Servizi', 'Metodo', 'Perché noi'];

function Navbar({ isMailForm }) {
  const navigate = useNavigate();
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
      {!isMailForm ?(
        <button className="cta-btn"
        onClick={() => navigate('/mail-form')}>
          Richiedi una consulenza
        </button>
        )
        :null
      }
    </nav>
  );
}

export default Navbar;
