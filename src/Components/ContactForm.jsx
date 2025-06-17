import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/save-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      alert("Message envoyé !");
      setFormData({ nom: '', email: '', message: '' });
    } catch (error) {
      alert("Erreur lors de l'envoi.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <input
        type="text"
        name="nom"
        placeholder="Votre nom"
        value={formData.nom}
        onChange={handleChange}
        required
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Envoyer</button>
    </form>
  );
};

export default ContactForm;
