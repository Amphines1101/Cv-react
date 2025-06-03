import React from "react";
import { Link } from "react-router-dom";
import Photo from "../media/photo-nesrine-larbi.jpg";


const Header = () => {
    return (
        <div>    
            <header style={{ backgroundColor: '#222', padding: '1rem', color: 'white' }}>
                <h1>Nesrine Larbi</h1>
                <img src ={Photo} alt="photo-nesrine" style={{ height: '50px', marginRight: '10px' }} />
            <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/competences" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Compétences</Link>
        <Link to="/portfolio" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Portfolio</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;