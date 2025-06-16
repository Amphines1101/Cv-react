import { useState } from 'react';
import projetsData from '../data/projetsData.json';

const Projets = () => {
  const [projetActif, setProjetActif] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const ouvrirModal = (projet) => {
    setProjetActif(projet);
    setImageIndex(0); // on démarre à la première image
  };

  const fermerModal = () => {
    setProjetActif(null);
    setImageIndex(0);
  };

  const imageSuivante = () => {
    if (projetActif && projetActif.images.length > 0) {
      setImageIndex((prevIndex) => (prevIndex + 1) % projetActif.images.length);
    }
  };

  const imagePrecedente = () => {
    if (projetActif && projetActif.images.length > 0) {
      setImageIndex((prevIndex) =>
        (prevIndex - 1 + projetActif.images.length) % projetActif.images.length
      );
    }
  };

  return (
    <div>
      <h2>Mes Projets</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projetsData.map((projet, index) => (
          <div key={index} onClick={() => ouvrirModal(projet)} style={{ cursor: 'pointer' }}>
            {projet.images && projet.images.length > 0 && (
              <img
                src={`/${projet.images[0]}`}
                alt={projet.nom}
                style={{ width: '200px', height: 'auto', borderRadius: '10px' }}
              />
            )}
            <p>{projet.nom}</p>
          </div>
        ))}
      </div>

      {projetActif && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '20px',
            borderRadius: '10px',
            width: '400px',
            position: 'relative',
            textAlign: 'center'
          }}>
            <button onClick={fermerModal} style={{ position: 'absolute', top: 10, right: 10 }}>X</button>
            <h3>{projetActif.nom}</h3>

            {projetActif.images && projetActif.images.length > 0 && (
              <div style={{ position: 'relative' }}>
                <button onClick={imagePrecedente} style={{
                  position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)'
                }}>
                  ◀
                </button>
                <img
                  src={`/${projetActif.images[imageIndex]}`}
                  alt={`${projetActif.nom} ${imageIndex + 1}`}
                  style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }}
                />
                <button onClick={imageSuivante} style={{
                  position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'
                }}>
                  ▶
                </button>
              </div>
            )}

            <p><strong>Description :</strong> {projetActif.description}</p>
            {projetActif.langage && (
              <p><strong>Langages :</strong> {projetActif.langage}</p>
            )}
            <a href={projetActif.github} target="_blank" rel="noreferrer">Voir sur GitHub</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
