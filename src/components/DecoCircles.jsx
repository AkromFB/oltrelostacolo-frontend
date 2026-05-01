import React from 'react';
import '../styles/DecoCircles.css';

function DecoCircles() {
  return (
    <div className="deco-circles">
      <svg
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="110" cy="110" r="105" stroke="#1C3830" strokeWidth="1" opacity="0.35" />
        <circle cx="110" cy="110" r="72" stroke="#1C3830" strokeWidth="1" opacity="0.35" />
        <line x1="5" y1="110" x2="215" y2="110" stroke="#1C3830" strokeWidth="1" opacity="0.3" />
        <line x1="110" y1="5" x2="110" y2="215" stroke="#1C3830" strokeWidth="1" opacity="0.3" />
        <circle cx="110" cy="110" r="32" fill="#1C3830" />
      </svg>
    </div>
  );
}

export default DecoCircles;
