import React from 'react';
import github from "../media/github.png"
import linkedin from "../media/linkedin.png"

const Contact = () => {
    return (
    <div style={{ padding: '2rem' }}>
      <div style={{
        backgroundColor: '#f1f1f1',
        padding: '1rem',
        borderRadius: '10px',
        marginBottom: '2rem',
      }}>
        <h2>Contactez-moi</h2>
        <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
        <p><strong>Email :</strong> nesrine.larbi@example.com</p>
      </div>

      <div>
        <h3>Retrouvez moi ici :</h3>
        <a
            href = "https://github.com/Amphines1101"
            target = "_blank"
            rel = "noopener noreferrer"
            style={{ margin: '0 10px' }}
        >
            <img src = {github} alt="GitHubLogo" style={{ width: '40px' }}/>
        </a>
        <a
            href = "https://www.linkedin.com/in/nesrine-larbi-0ab170348/"
            target = "_blank"
            rel = "noopener noreferrer"
            style={{ margin: '0 10px' }}
        >
            <img src = {linkedin} alt="LinkedInLogo" style={{ width: '40px' }}/>
        </a>
      </div>
      </div>
    );
};

export default Contact;


