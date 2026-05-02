import React from 'react';
import logo from '../images/logo.png';
import logoLight from '../images/logo-light.png';
import '../styles/Logo.css';

function Logo({ isScrolled }) {
  return (
    <a className="logo" href="#">
      <img
        src={isScrolled ? logoLight : logo}
        alt="Oltre l'Ostacolo logo"
        className="logo-img"
      />
    </a>
  );
}

export default Logo;
