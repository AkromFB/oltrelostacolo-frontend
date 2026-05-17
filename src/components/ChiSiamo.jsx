import React from "react";

function ChiSiamo(){
    return(
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
    );
};
export default ChiSiamo;