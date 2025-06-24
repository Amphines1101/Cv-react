import React from 'react';
import github from "../media/github.png";
import linkedin from "../media/linkedin.png";
import ContactForm from "../Components/ContactForm";
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      
      <div className="top-half">
        <img src="/image/green-world-map.jpg" alt="Monde vert" className="world-image" />
        <div className="contact-info-box">
          <h2>Contactez-moi</h2>
          <p><strong>Téléphone :</strong> 06 52 07 15 20</p>
          <p><strong>Email :</strong> nlarbi2007@gmail.com</p>
        </div>
      </div>

      <div className="form-wrapper">
        <div className="form-container">
          <h3>Laissez-moi un message :</h3>
          <ContactForm />
        </div>
      </div>

      <footer className="social-footer">
        <div className="social-icons">
          <a href="https://github.com/Amphines1101" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/nesrine-larbi-0ab170348/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
