import { useState } from 'react';
import projetsData from '../data/projetsData.json';
import '../styles/portfolio.css'; // Assure-toi que ce chemin est correct

const Projets = () => {
  const [projetActif, setProjetActif] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const ouvrirModal = (projet) => {
    setProjetActif(projet);
    setImageIndex(0);
  };

  const fermerModal = () => {
    setProjetActif(null);
    setImageIndex(0);
  };

  const imageSuivante = () => {
    if (projetActif?.images?.length > 0) {
      setImageIndex((prevIndex) => (prevIndex + 1) % projetActif.images.length);
    }
  };

  const imagePrecedente = () => {
    if (projetActif?.images?.length > 0) {
      setImageIndex((prevIndex) =>
        (prevIndex - 1 + projetActif.images.length) % projetActif.images.length
      );
    }
  };

  return (
    <div className="portfolio-page">
      <h2 className="portfolio-title">Mes Projets</h2>

      <div className="projects-grid">
        {projetsData.map((projet, index) => (
          <div key={index} className="project-card">
            {projet.images?.[0] && (
              <img src={`/${projet.images[0]}`} alt={projet.nom} />
            )}
            <p>{projet.nom}</p>
            <button className="plus-btn" onClick={() => ouvrirModal(projet)}>+</button>
          </div>
        ))}
      </div>

      {projetActif && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={fermerModal}>X</button>
            <h3>{projetActif.nom}</h3>

            {projetActif.images?.length > 0 && (
              <div style={{ position: 'relative' }}>
                <button onClick={imagePrecedente} style={{
                  position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)'
                }}>
                  ◀
                </button>
                <img
                  src={`/${projetActif.images[imageIndex]}`}
                  alt={`${projetActif.nom} ${imageIndex + 1}`}
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
            <a href={projetActif.github} target="_blank" rel="noreferrer">
              Voir sur GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
