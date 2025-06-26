import React from 'react';
import langagesData from '../data/langages.json';

const calculerPourcentage = (mois) => {
  const maxMois = 36; 
  return Math.min((mois / maxMois) * 100, 100);
};

const Langages = () => {
  return (
    <div>
      <h3>Langages</h3>
      <ul>
        {langagesData.map((langage, index) => {
          const pourcentage = calculerPourcentage(langage.experience);
          return (
            <li key={index}>
              <strong>{langage.nom}</strong>
              <div className="bar-container">
                <div className="bar" style={{ width: `${pourcentage}%` }}></div>
              </div>
              <small>{langage.experience} mois d’expérience</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Langages;
