import React from 'react';
import Navbar from './components/Navbar';
import VerticalLines from './components/VerticalLines';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/global.css';

function App() {

  return (
    <div className="app">
      <VerticalLines/>
      {/* <div className="auth-links">
        <button onClick={() => navigate('/login')} className="login-link">
          Login →
        </button>
        <button onClick={() => navigate('/register')} className="login-link">
          Registrati →
        </button>
      </div> */}
      <Navbar isMailForm={false}/>
      <Hero />
      <section id="chi-siamo" data-testid="about-section" className="about-section">
  <div className="about-marquee">
    <div className="marquee-track about-marquee-track">
      {[
        "Analisi",
        "Margini",
        "Magazzino",
        "Fornitori",
        "Promozioni",
        "Automazione",
        "Crescita",
        "Analisi",
        "Margini",
        "Magazzino",
        "Fornitori",
        "Promozioni",
        "Automazione",
        "Crescita",
        "Analisi",
        "Margini",
        "Magazzino",
        "Fornitori",
        "Promozioni",
        "Automazione",
        "Crescita",
      ].map((item, index) => (
        <span key={`${item}-${index}`} className="about-marquee-item">
          <span>{item}</span>
          <span className="about-marquee-dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  </div>

  <div className="section-container about-content">
    <div className="about-layout">
      <div className="about-intro">
        <div className="section-eyebrow about-eyebrow">
          <span className="about-eyebrow-line" />
          Chi siamo
        </div>

        <p className="about-lead">
          Un team di consulenti, analisti e strateghi che lavora a fianco della
          direzione aziendale. Non deleghiamo: entriamo nei numeri.
        </p>
      </div>

      <div className="about-main">
        <h2 data-testid="about-headline" className="section-title about-title">
          Un <span className="about-title-accent">partner strategico</span>, non
          un fornitore. Ogni decisione — sostenuta da un dato, da una logica, da
          un perché.
        </h2>

        <div className="about-copy-grid">
          <p className="about-copy">
            Lavoriamo con PMI e gruppi strutturati che vogliono smettere di
            crescere per inerzia. Portiamo dentro l&apos;azienda un metodo
            analitico, una visione d&apos;insieme e la disciplina di chi misura
            ogni leva prima di toccarla.
          </p>

          <p className="about-copy">
            Non vendiamo slide. Costruiamo decisioni: sul mix vendite, sul
            magazzino, sui fornitori, sulle promozioni. E restiamo fino a quando
            il risultato non diventa abitudine.
          </p>
        </div>

        <div className="about-footer">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="19" />
            <circle cx="26" cy="20" r="7" />
          </svg>

          <p className="about-footer-text">
            Il nostro nome è una promessa: portarti{" "}
            <span className="about-footer-highlight">oltre l&apos;ostacolo</span>{" "}
            che oggi frena la crescita — anche quando non è ancora visibile.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Cosa offriamo</span>
            <h2 className="section-title">I nostri servizi</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">◆</div>
              <h3>Strategia aziendale</h3>
              <p>Analisi e pianificazione strategica per massimizzare margini e crescita sostenibile.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">◆</div>
              <h3>Ottimizzazione processi</h3>
              <p>Riduzione degli sprechi e miglioramento dell'efficienza operativa.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">◆</div>
              <h3>Business intelligence</h3>
              <p>Dashboard e reportistica per decisioni basate su dati concreti.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">◆</div>
              <h3>Formazione executive</h3>
              <p>Programmi su misura per leadership e team manageriali.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Il nostro approccio</span>
            <h2 className="section-title">Metodo basato sui risultati</h2>
          </div>
          <div className="method-content">
            <div className="method-text">
              <p>Non crediamo nelle soluzioni preconfezionate. Ogni azienda è unica, con sfide e opportunità specifiche.</p>
              <p>Il nostro metodo combina analisi rigorosa, esperienza settoriale e un approccio pratico che mette al centro i risultati misurabili.</p>
              <ul className="method-list">
                <li><span>✓</span> Analisi approfondita del contesto</li>
                <li><span>✓</span> Piano d'azione personalizzato</li>
                <li><span>✓</span> Implementazione affiancata</li>
                <li><span>✓</span> Monitoraggio continuo dei KPI</li>
              </ul>
            </div>
            <div className="method-stats">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Progetti completati</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">94%</span>
                <span className="stat-label">Clienti soddisfatti</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Anni di esperienza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Perché sceglierci</span>
            <h2 className="section-title">Differenze che contano</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h4>Trasparenza</h4>
              <p>Niente gergo incomprensibile o report oscuri. Saprai sempre cosa stiamo facendo e perché.</p>
            </div>
            <div className="why-item">
              <h4>Pragmatismo</h4>
              <p>Teorie applicabili alla realtà. Consigliamo solo ciò che può essere implementato con successo.</p>
            </div>
            <div className="why-item">
              <h4>Partnership</h4>
              <p>Non siamo fornitori, ma alleati. Il tuo successo è il nostro miglior biglietto da visita.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Pronto a portare la tua azienda al livello successivo?</h2>
          <p className="cta-subtitle">Parliamone. La prima consulenza è gratuita.</p>
          <button className="cta-btn-large">
            Prenota una chiamata →
          </button>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
