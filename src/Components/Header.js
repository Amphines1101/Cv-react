import React from "react";
import { Link } from "react-router-dom";
import Photo from "../media/photo-nesrine-larbi.jpg";

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
    </div>
  );
};

export default Header;
