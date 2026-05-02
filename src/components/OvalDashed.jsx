import React from 'react';

function OvalDashed() {
  return (
    <svg
      className="oval-svg slow-spin"
      viewBox="0 0 260 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <ellipse
        cx="130"
        cy="70"
        rx="120"
        ry="60"
        stroke="#1C3830"
        strokeWidth="2"
        strokeDasharray="8 6"
        fill="none"
      />
    </svg>
  );
}

export default OvalDashed;
