import React from 'react';
import './styleNosotros.css';

const data = [
{
    id: 1,
    name: "Persona 1",
    position: "Cargo 1",
    description: "Descripción",
    linkedin: "",
    github: "",
},
{
    id: 2,
    name: "Persona 2",
    position: "Cargo 2",
    description: "Descripción de la persona 2...",
},
{
    id: 3,
    name: "Persona 3",
    position: "Cargo 3",
    description: "Descripción de la persona 3...",
},
  // Agregar datos para las otras personas aquí...
];

const QuienesSomos = () => {
return (
    <div>
        <h2>Quiénes Somos</h2>
        <div className="person-cards">
            {data.map((person) => (
            <div key={person.id} className="person-card">
                <h3>{person.name}</h3>
                <p>{person.position}</p>
                <p>{person.description}</p>
            </div>
        ))}
        </div>
    </div>
);
};

export default QuienesSomos;
