import React from 'react';
import '../styles/Logo.css';

function Logo() {
  return (
    <a className="logo" href="#">
      <svg
        className="logo-svg"
        viewBox="0 0 80 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Oltre l'Ostacolo logo"
      >
        {/* Brick rows */}
        <rect x="4" y="36" width="72" height="9" rx="1" fill="#1C3830" />
        <rect x="4" y="47" width="72" height="9" rx="1" fill="#1C3830" />
        <rect x="4" y="58" width="72" height="9" rx="1" fill="#1C3830" />
        {/* Brick mortar lines row 1 */}
        <line x1="40" y1="36" x2="40" y2="45" stroke="#E8A820" strokeWidth="1" />
        <line x1="20" y1="36" x2="20" y2="45" stroke="#E8A820" strokeWidth="1" />
        <line x1="60" y1="36" x2="60" y2="45" stroke="#E8A820" strokeWidth="1" />
        {/* Brick mortar lines row 2 */}
        <line x1="30" y1="47" x2="30" y2="56" stroke="#E8A820" strokeWidth="1" />
        <line x1="55" y1="47" x2="55" y2="56" stroke="#E8A820" strokeWidth="1" />
        {/* Brick mortar lines row 3 */}
        <line x1="40" y1="58" x2="40" y2="67" stroke="#E8A820" strokeWidth="1" />
        <line x1="20" y1="58" x2="20" y2="67" stroke="#E8A820" strokeWidth="1" />
        <line x1="60" y1="58" x2="60" y2="67" stroke="#E8A820" strokeWidth="1" />
        {/* Giraffe neck */}
        <path
          d="M36 36 C36 22 44 18 40 8"
          stroke="#1C3830"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Giraffe head */}
        <ellipse cx="40" cy="7" rx="5" ry="4.5" fill="none" stroke="#1C3830" strokeWidth="2.2" />
        {/* Ossicones */}
        <line x1="36" y1="4" x2="33" y2="0" stroke="#1C3830" strokeWidth="2" strokeLinecap="round" />
        <line x1="44" y1="4" x2="47" y2="0" stroke="#1C3830" strokeWidth="2" strokeLinecap="round" />
        <circle cx="33" cy="0" r="1.5" fill="#1C3830" />
        <circle cx="47" cy="0" r="1.5" fill="#1C3830" />
        {/* Neck spots */}
        <rect x="37" y="25" width="3" height="2" rx="0.5" fill="#1C3830" opacity="0.4" />
        <rect x="40" y="30" width="2" height="2" rx="0.5" fill="#1C3830" opacity="0.4" />
      </svg>
      <div className="logo-text">
        OLTRE
        <br />
        L'OSTACOLO
      </div>
    </a>
  );
}

export default Logo;
