import React from 'react';
import CV from "../media/cv-nesrine-larbi.pdf";

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Nesrine Larbi</h1>
      <h2 className="home-subtitle">Développeuse Full-Stack</h2>
      <a
        href={CV}
        download="Nesrine-Larbi-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
      >
        Télécharger mon CV format PDF
      </a>
    </div>
  );
};

export default Home;
