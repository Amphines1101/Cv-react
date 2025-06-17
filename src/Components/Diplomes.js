import React from 'react';
import diplomesData from "../data/diplomes.json";

const Diplomes = () => {
    return (
        <div>
           <h3>Diplômes</h3>
            <ul>
                {diplomesData.map((diplome, index)=> (
                    <li key={index}>
                        {diplome.annee} = {diplome.titre}
                        ({diplome.etablissement} - {diplome.ville})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Diplomes;