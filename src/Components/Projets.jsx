import { useState } from 'react';
import projetsData from '../data/projetsData.json';
import '../styles/portfolio.css';

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
      setImageIndex((prev) => (prev + 1) % projetActif.images.length);
    }
  };

  const imagePrecedente = () => {
    if (projetActif?.images?.length > 0) {
      setImageIndex((prev) => (prev - 1 + projetActif.images.length) % projetActif.images.length);
    }
  };

  return (
    <div className="portfolio-page">
      <h2 className="portfolio-title">Mes Projets</h2>

      <div className="projects-grid">
        {projetsData.map((projet, index) => (
          <div key={index} className="project-card">
            <p className="project-title">{projet.nom}</p>
            {projet.images?.[0] && (
              <img src={`/${projet.images[0]}`} alt={projet.nom} className="project-image" />
            )}
            <button className="plus-btn" onClick={() => ouvrirModal(projet)}>+</button>
          </div>
        ))}
      </div>

      {projetActif && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{projetActif.nom}</h3>

            {projetActif.images?.length > 0 && (
              <div className="modal-image-container">
                <button onClick={imagePrecedente} className="nav-btn">◀</button>
                <img
                  src={`/${projetActif.images[imageIndex]}`}
                  alt={`${projetActif.nom} ${imageIndex + 1}`}
                />
                <button onClick={imageSuivante} className="nav-btn">▶</button>
              </div>
            )}

            <p><strong>Description :</strong> {projetActif.description}</p>
            {projetActif.langage && (
              <p><strong>Langages :</strong> {projetActif.langage}</p>
            )}
            {projetActif.github && (
              <a href={projetActif.github} target="_blank" rel="noreferrer">
                Voir sur GitHub
              </a>
            )}

            <button className="retour-btn" onClick={fermerModal}>Retourner sur la page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projets;
