import React from 'react';
import projetsData from '../data/projets.json';
import Projet from '../Components/Projet';

const Portfolio = () => {
  return (
    <div>
      <h2>Mes projets</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projetsData.map((projet, index) => {
          const imagePath = require(`../media/${projet.image}`);
          return <Projet key={index} projet={projet} image={imagePath} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
