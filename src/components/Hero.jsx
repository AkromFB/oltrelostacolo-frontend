import React from 'react';
import OvalDashed from './OvalDashed';
import DecoCircles from './DecoCircles';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">
        Consulenza Strategica · Est. Italia
      </div>

      <h1 className="headline">
        <span className="headline-line">Vediamo oltre.</span>
        <span className="headline-line headline-line--flex">
          Facciamo&nbsp;
          <span className="oval-wrap">
            <span className="italic-word">crescere</span>
            <OvalDashed />
          </span>
        </span>
        <span className="headline-line">le imprese.</span>
      </h1>

      <p className="subtext">
        Siamo il partner strategico delle aziende che vogliono margini più alti,
        operazioni più snelle e decisioni basate sui dati — non sulle impressioni.
      </p>
      <div>
        <button className="hero-cta">
          Richiedi una consulenza →
        </button>
        <a data-testid="hero-cta-secondary" href="#metodo" className="btn-ghost">Scopri il metodo</a>
      </div>

      <DecoCircles />
    </section>
  );
}

export default Hero;
