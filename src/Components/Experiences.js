import React from 'react';
import experiences from "../data/expériences.json";

const Experiences = () => {
    return (
        <div>
           <h1> Experiences </h1>
            <ul>
                {experiences.map((exp, index)=> (
                    <li key={index}>
                        <h3>
                            ({exp.poste} - {exp.entreprise})</h3>
                            <p>{exp.date}</p>
                            <p>{exp.description}</p>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experiences;