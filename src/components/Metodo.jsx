import React from 'react';
import '../styles/Metodo.css';

const steps = [
  {
    num: '01',
    title: 'Analisi',
    desc: 'Entriamo nei dati reali — vendite, magazzino, fornitori, costi. Capiamo dove si crea valore e dove si perde.',
  },
  {
    num: '02',
    title: 'Strategia',
    desc: 'Definiamo priorità e direzione. Niente piani enciclopedici: poche decisioni, giuste, misurabili.',
  },
  {
    num: '03',
    title: 'Implementazione',
    desc: 'Affianchiamo la direzione e i team operativi. Traduciamo la strategia in processi, KPI e responsabilità.',
  },
  {
    num: '04',
    title: 'Crescita',
    desc: 'Misuriamo, correggiamo, consolidiamo. Il cambiamento diventa abitudine — e i numeri lo confermano.',
  },
];

function Metodo() {
  return (
    <section className="metodo">
      <div className="metodo__top">
        <div className="metodo__left">
          <div className="metodo__eyebrow">
            <span className="metodo__eyebrow-line" />
            METODO
          </div>
          <h2 className="metodo__headline">
            Un processo in{' '}
            <em className="metodo__italic">quattro tempi</em>. Zero passi saltati.
          </h2>
        </div>
        <div className="metodo__right">
          <p className="metodo__subtext">
            Lo stesso metodo che applichiamo a una PMI o a un gruppo da 200 milioni.
            Cambia la scala, non la disciplina.
          </p>
        </div>
      </div>

      <div className="metodo__steps">
        {steps.map((step, i) => (
          <div className="metodo__step" key={step.num}>
            <div className="metodo__step-dot-row">
              <span className="metodo__dot" />
            
            </div>
            <div className="metodo__step-body">
              <span className="metodo__step-num">{step.num}</span>
              <h3 className="metodo__step-title">{step.title}</h3>
              <p className="metodo__step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Metodo;
