import { useState } from 'react';
import projetsData from '../data/projets.json';

const Projets = () => {
  const [projetActif, setProjetActif] = useState(null);

  const ouvrirModal = (projet) => {
    setProjetActif(projet);
  };

  const fermerModal = () => {
    setProjetActif(null);
  };

  return (
    <div>
      <h2>Mes Projets</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projetsData.map((projet, index) => (
          <div key={index} onClick={() => ouvrirModal(projet)} style={{ cursor: 'pointer' }}>
            <img
              src={require(`../media/${projet.image}`)}
              alt={projet.nom}
              style={{ width: '200px', height: 'auto', borderRadius: '10px' }}
            />
            <p>{projet.nom}</p>
          </div>
        ))}
      </div>

      {projetActif && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            background: '#fff', padding: '20px',
            borderRadius: '10px', width: '400px', position: 'relative'
          }}>
            <button onClick={fermerModal} style={{ position: 'absolute', top: 10, right: 10 }}>X</button>
            <h3>{projetActif.nom}</h3>
            <img
              src={require(`../media/${projetActif.image}`)}
              alt={projetActif.nom}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <p><strong>Description :</strong> {projetActif.description}</p>
            <p><strong>Langages :</strong> {projetActif.langage}</p>
            <a href={projetActif.github} target="_blank" rel="noreferrer">Voir sur GitHub</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
