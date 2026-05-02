import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/global.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="grid-bg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>
      <div className="auth-links">
        <button onClick={() => navigate('/login')} className="login-link">
          Login →
        </button>
        <button onClick={() => navigate('/register')} className="login-link">
          Registrati →
        </button>
      </div>
      <Navbar />
      <Hero />

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

      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">Oltre Lo Stacolo</span>
              <p>Consulenza strategica per aziende che vogliono crescere con metodo.</p>
            </div>
            <div className="footer-links">
              <h5>Azienda</h5>
              <a href="#">Chi siamo</a>
              <a href="#">Servizi</a>
              <a href="#">Metodo</a>
              <a href="#">Contatti</a>
            </div>
            <div className="footer-links">
              <h5>Legale</h5>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Termini di servizio</a>
            </div>
            <div className="footer-contact">
              <h5>Contatti</h5>
              <p>info@oltrelostacolo.it</p>
              <p>+39 02 1234567</p>
              <p>Milano, Italia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Oltre Lo Stacolo. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
