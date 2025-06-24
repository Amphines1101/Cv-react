import React from "react";
import { Link } from "react-router-dom";
import Photo from "../media/photo-nesrine-larbi.jpg";
import github from "../media/github.png";
import linkedin from "../media/linkedin.png";

const Header = () => {
  return (
    <div className="sidebar">
      <div className="photoWrapper">
        <img src={Photo} alt="Nesrine Larbi" className="photo" />
      </div>
      <h1 className="name">Nesrine Larbi</h1>
      <nav className="nav">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/competences" className="link">Compétences</Link>
        <Link to="/portfolio" className="link">Portfolio</Link>
        <Link to="/contact" className="link">Contact</Link>
      </nav>
      <div className="social-icons-header" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <a href="https://github.com/Amphines1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={github} alt="GitHub" style={{ width: 30, height: 30 }} />
        </a>
        <a href="https://www.linkedin.com/in/nesrine-larbi-0ab170348/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={linkedin} alt="LinkedIn" style={{ width: 30, height: 30 }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
