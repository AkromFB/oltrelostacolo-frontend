import React from 'react';
import '../styles/PercheSceglierci.css';

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38" height="38" rx="19" stroke="#1C3830" strokeWidth="1.5" />
        <polyline points="10,26 16,19 21,23 30,14" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <polyline points="27,14 30,14 30,17" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Decisioni sui dati, non sulle impressioni',
    desc: 'Ogni raccomandazione è tracciabile fino al dato che l\'ha generata. Niente opinioni travestite da strategia.',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38" height="38" rx="19" stroke="#1C3830" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="7" stroke="#1C3830" strokeWidth="1.8" fill="none"/>
        <circle cx="20" cy="20" r="2.5" stroke="#1C3830" strokeWidth="1.5" fill="none"/>
        <line x1="20" y1="10" x2="20" y2="7" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="20" y1="30" x2="20" y2="33" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="10" y1="20" x2="7" y2="20" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="30" y1="20" x2="33" y2="20" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Focalizzati sulle leve che muovono il bilancio',
    desc: 'Non ti sommergiamo di progetti. Lavoriamo sulle poche cose che cambiano davvero margini, costi e cash.',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38" height="38" rx="19" stroke="#1C3830" strokeWidth="1.5" />
        <path d="M20 13 C16 13 13 16 13 20 C13 24 16 27 20 27 C24 27 27 24 27 20" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M17 20 L19.5 22.5 L24 17" stroke="#1C3830" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Affianchiamo la direzione fino all\'execution',
    desc: 'Non consegniamo un report e spariamo. Restiamo dentro l\'azienda finché il risultato non è stabile.',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38" height="38" rx="19" stroke="#1C3830" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" stroke="#1C3830" strokeWidth="1.8" fill="none"/>
        <line x1="20" y1="14" x2="20" y2="26" stroke="#1C3830" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="20" x2="26" y2="20" stroke="#1C3830" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="10" stroke="#1C3830" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
      </svg>
    ),
    title: 'Visione industriale, non solo consulenziale',
    desc: 'Capiamo la complessità di chi vende, produce e gestisce magazzini. Parliamo la lingua dell\'operativo.',
  },
];

function PercheSceglierci() {
  return (
    <section className="perche">
      <div className="perche__left">
        <div className="perche__eyebrow">
          <span className="perche__eyebrow-line" />
          PERCHÉ SCEGLIERCI
        </div>
        <h2 className="perche__headline">
          Ti serve qualcuno che{' '}
          <em className="perche__italic">decida con te</em>, non sopra di te.
        </h2>
      </div>

      <div className="perche__right">
        <div className="perche__grid">
          {features.map((f) => (
            <div className="perche__card" key={f.id}>
              <div className="perche__icon">{f.icon}</div>
              <h3 className="perche__card-title">{f.title}</h3>
              <p className="perche__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PercheSceglierci;
