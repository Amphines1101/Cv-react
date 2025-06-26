import React from 'react';
import Diplomes from '../Components/Diplomes';
import Experiences from "../Components/Experiences";
import Langages from '../Components/Langages';
import Annexe from '../Components/Annexe';

const Competences = () => {
  return (
    <div className="skills-page">
      <div className="skills-content">
        <div className="skill-card langages">
          <Langages />
        </div>
        <div className="right-column">
          <div className="skill-card diplomes">
            <Diplomes />
          </div>
          <div className="skill-card experiences">
            <Experiences />
          </div>
          <div className="skill-card autres">
            <Annexe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
