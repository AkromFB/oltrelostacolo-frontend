import React from 'react';
import Navbar from './components/Navbar';
import VerticalLines from './components/VerticalLines';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import Servizi from './components/Servizi';
import Metodo from './components/Metodo';
import PercheSceglierci from './components/PercheSceglierci';
import Parliamone from './components/Parliamone';
import Footer from './components/Footer';

import './styles/global.css';

function App() {

  return (
    <div className="app">
      <VerticalLines />
      {/* <div className="auth-links">
        <button onClick={() => navigate('/login')} className="login-link">
          Login →
        </button>
        <button onClick={() => navigate('/register')} className="login-link">
          Registrati →
        </button>
      </div> */}
      <Navbar isMailForm={false} />
      <Hero />
      <ChiSiamo/>
      <Servizi />
      <Metodo />
      <PercheSceglierci />
      <Parliamone />
      <Footer />
    </div>
  );
}

export default App;
