import React from "react";
import '../styles/global.css';
function Footer(){
    return(<footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">Oltre L'ostacolo</span>
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
              <p>Palermo, Italia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Oltre L'otacolo. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>);
};

export default Footer;
