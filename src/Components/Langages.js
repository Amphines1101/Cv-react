import React from 'react';
import langagesData from '../data/langages.json';

const calculerPourcentage = (annees) => {
  const max = 3;
  return Math.min((annees / max) * 100, 100);
};

const Langages = () => {
  return (
    <div>
      <h2>Langages</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {langagesData.map((langage, index) => {
          const pourcentage = calculerPourcentage(langage.experience);
          return (
            <li key={index} style={{ marginBottom: '15px' }}>
              <strong>{langage.nom}</strong>
              <div style={{ background: '#ddd', borderRadius: '5px', overflow: 'hidden', height: '20px', marginTop: '5px' }}>
                <div
                  style={{
                    width: `${pourcentage}%`,
                    background: '#4CAF50',
                    height: '100%',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
              <small>{langage.experience} an(s) d’expérience</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Langages;
