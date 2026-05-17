import React from 'react';
import logo from '../images/logo.png';
import logoLight from '../images/logo-light.png';
import '../styles/Logo.css';
import { useNavigate } from 'react-router-dom';
function Logo({ isScrolled }) {
  const navigate = useNavigate();
  return (
    <a className="logo" href="#">
      <img
        src={isScrolled ? logoLight : logo}
        alt="Oltre l'Ostacolo logo"
        className="logo-img"
        onClick={()=>{navigate("/")}}
      />
    </a>
  );
}

export default Logo;
