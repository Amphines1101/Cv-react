import React from 'react';
import github from "../media/github.png";
import linkedin from "../media/linkedin.png";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="top-image"></div>

      <div className="contact-info-card">
        <h2>Contactez-moi</h2>
        <p><strong>Téléphone :</strong> 06 52 07 15 20</p>
        <p><strong>Email :</strong> nlarbi2007@gmail.com</p>

        <h3>Retrouvez-moi ici :</h3>
        <div className="social-icons">
          <a
            href="https://github.com/Amphines1101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/nesrine-larbi-0ab170348/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn Logo" />
          </a>
        </div>
      </div>

      <div className="contact-form-card">
        <h3>Laissez-moi un message :</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
