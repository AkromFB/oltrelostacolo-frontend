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
      <button onClick={() => navigate('/login')} className="login-link">
        Login →
      </button>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
