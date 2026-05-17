import React from 'react';
import '../styles/Parliamone.css';

function Parliamone() {
  return (
    <section className="parliamone">
      {/* decorative circles top-right */}
      <div className="parliamone__deco-tr" aria-hidden="true">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="130"
            cy="60"
            r="75"
            stroke="#E8A820"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity="0.5"
          />
          <circle cx="148" cy="42" r="26" fill="#E8A820" />
        </svg>
      </div>

      {/* decorative arc bottom-left */}
      <div className="parliamone__deco-bl" aria-hidden="true">
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="0"
            cy="160"
            r="120"
            stroke="#E8A820"
            strokeWidth="1"
            opacity="0.25"
            fill="none"
          />
          <circle
            cx="0"
            cy="160"
            r="80"
            stroke="#E8A820"
            strokeWidth="1"
            opacity="0.2"
            fill="none"
          />
        </svg>
      </div>

      <div className="parliamone__content">
        <div className="parliamone__eyebrow">
          <span className="parliamone__eyebrow-line" />
          PRONTI A DECIDERE SUI DATI
        </div>

        <h2 className="parliamone__headline">
          <span className="parliamone__headline-bold">Parliamone.</span>
          <br />
          <em className="parliamone__headline-italic">Senza giri.</em>
        </h2>

        <p className="parliamone__subtext">
          Raccontaci dove pensi di perdere valore. Nelle prime due settimane
          capiamo se possiamo aiutarti — e, soprattutto, se ne vale la pena.
        </p>

        <div className="parliamone__actions">
          <button className="parliamone__btn-primary">
            Richiedi una consulenza →
          </button>
          <button className="parliamone__btn-secondary">
            Oppure chiamaci ↗
          </button>
        </div>
      </div>
    </section>
  );
}

export default Parliamone;
