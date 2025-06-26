import React from 'react';
import autreData from '../data/autres.json';

const Annexe = () => {
     return (
    <div className="annexe">
      <h3>Autres Compétences</h3>
      <ul>
        {autreData.map((item, index) => (
          <li key={index}>{item.autre}</li>
        ))}
      </ul>
    </div> 
  );
};

export default Annexe;