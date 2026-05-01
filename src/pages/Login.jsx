import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="grid-bg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>

      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Accedi</h1>
          <p className="login-subtitle">Benvenuto, inserisci i tuoi dati</p>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Accedi →
            </button>
          </form>

          <p className="login-footer">
            Non hai un account? <a href="#">Registrati</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
