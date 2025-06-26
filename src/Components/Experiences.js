import React from 'react';
import experiences from "../data/expériences.json";

const Experiences = () => {
    return (
        <div>
           <h3> Experiences </h3>
            <ul>
                {experiences.map((exp, index)=> (
                    <li key={index}>
                        <h2>
                            ({exp.poste} - {exp.entreprise})</h2>
                            <p>{exp.date}</p>
                            <p>{exp.description}</p>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experiences;