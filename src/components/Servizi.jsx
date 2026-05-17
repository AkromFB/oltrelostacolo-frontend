import React, { useState } from 'react';
import '../styles/Servizi.css';

const servizi = [
  {
    num: '01',
    title: 'Analisi vendite e margini',
    tags: ['Mix prodotto', 'Pricing', 'Marginalità'],
    desc: 'Leggiamo il business linea per linea: dove si guadagna davvero, dove si brucia valore, cosa spostare subito.',
  },
  {
    num: '02',
    title: 'Gestione magazzino',
    tags: ['Rotazioni', 'Safety stock', 'Obsoleti'],
    desc: 'Rotazioni, livelli di servizio, capitale immobilizzato. Trasformiamo il magazzino da costo a leva competitiva.',
  },
  {
    num: '03',
    title: 'Ottimizzazione fornitori',
    tags: ['Sourcing', 'Negoziazione', 'KPI fornitori'],
    desc: 'Negoziazione strutturata, razionalizzazione del parco fornitori, condizioni allineate agli obiettivi industriali.',
  },
  {
    num: '04',
    title: 'Strategie promozionali data-driven',
    tags: ['Lift & uplift', 'ROI promo', 'Mix canali'],
    desc: 'Piani promo costruiti sui dati di sell-out reali, con lift misurati, cannibalizzazioni controllate e ROI chiaro.',
  },
  {
    num: '05',
    title: 'Digitalizzazione e automazione',
    tags: ['Workflow', 'BI & dashboard', 'Integrazioni'],
    desc: 'Processi ripetitivi automatizzati, dati puliti e connessi, dashboard che parlano al board — non all\'IT.',
  },
];

function Servizi() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="servizi">
      {/* ── Top ── */}
      <div className="servizi__top">
        <div className="servizi__top-left">
          <div className="servizi__eyebrow">
            <span className="servizi__eyebrow-line" />
            SERVIZI
          </div>
          <h2 className="servizi__headline">
            Cinque leve.<br />
            <em className="servizi__italic">Un'unica direzione:</em><br />
            più valore per<br />
            l'impresa.
          </h2>
        </div>
        <div className="servizi__top-right">
          <p className="servizi__subtext">
            Ogni pilastro è un ambito in cui misuriamo, decidiamo e implementiamo.
            Non consegniamo un report e spariamo: restiamo finché il cambiamento
            non produce numeri diversi.
          </p>
        </div>
      </div>

      {/* ── List ── */}
      <div className="servizi__list">
        {servizi.map((s, i) => (
          <div
            key={s.num}
            className={`servizi__item${hovered === i ? ' servizi__item--hovered' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="servizi__item-num">{s.num}</span>

            <div className="servizi__item-center">
              <h3 className="servizi__item-title">{s.title}</h3>
              <div className="servizi__tags">
                {s.tags.map((tag) => (
                  <span className="servizi__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <p className="servizi__item-desc">{s.desc}</p>

            <span className="servizi__arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servizi;
