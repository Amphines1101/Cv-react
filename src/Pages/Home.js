import React from 'react';
import CV from "../media/cv-nesrine-larbi.pdf";

const Home = () => {
    return (
        <div>
        <h1>Nesrine Larbi</h1>
        <h2>Développeuse Full-Stack</h2>
        <a
        href={CV}
        download="Nesrine-Larbi-CV.pdf"
        target="_blank" // ouvre dans une nouvelle page
        rel="noopener noreferrer" //sécurité de windows opener et pour pas tracer dans l'url
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Télécharger mon CV format PDF
    </a>
        </div>
    
    );
};

export default Home;