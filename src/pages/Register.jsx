import React from 'react';
import '../styles/Login.css';

function Register() {
  return (
    <div className="login-page">
      <div className="grid-bg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>

      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Registrati</h1>
          <p className="login-subtitle">Crea un account, è gratuito</p>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Mario Rossi"
                required
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="confirm-password">Conferma password</label>
              <input
                type="password"
                id="confirm-password"
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Registrati →
            </button>
          </form>

          <p className="login-footer">
            Hai già un account? <a href="/login">Accedi</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
