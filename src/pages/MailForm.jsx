import React, { useState } from 'react';
import '../styles/MailForm.css';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import VerticalLines from '../components/VerticalLines';
import Footer from '../components/Footer';
const MailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='app'>
    <Navbar isMailForm={true}/>
    <VerticalLines/>
    <section className='form-section mail-form-section'>
    <form onSubmit={handleSubmit} className="form-element">
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Oggetto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          />
      </div>
      <div className="form-group">
        <label htmlFor="message">Messaggio</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          />
      </div>
      <button type="submit" className="submit-btn">Invia</button>
    </form>
    </section>
     <Footer/>
    </div>
  );
};

export default MailForm;