//import React from 'react';
import './styleNosotros.css';

const data = [
{
    id: 1,
    name: "Persona 1",
    position: "Cargo 1",
    description: "Descripción de la persona 1...",
    linkedin: "https://www.linkedin.com/in/persona1/",
    github: "https://github.com/persona1",
    instagram: "",
},
{
    id: 2,
    name: "Persona 2",
    position: "Cargo 2",
    description: "Descripción de la persona 2...",
    linkedin: "https://www.linkedin.com/in/persona2/",
    github: "https://github.com/persona2",
    instagram: "",
},
{
    id: 3,
    name: "Persona 3",
    position: "Cargo 3",
    description: "Descripción de la persona 3...",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
},
{
    id: 4,
    name: "Persona 4",
    position: "Cargo 4",
    description: "Descripción de la persona 4...",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
},
{
    id: 5,
    name: "Persona 5",
    position: "Cargo 5",
    description: "Descripción de la persona 5...",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
},
{
    id: 6,
    name: "Persona 6",
    position: "Cargo 6",
    description: "Descripción de la persona 6...",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
},

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
                    <div className="links">
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn 
                        </a>
                        <a href={person.github} target="_blank" rel="noopener noreferrer">
                        GitHub 
                        </a>
                        <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                        Instagram 
                        </a>
                    </div>
                </div>
        ))}
            </div>
        </div>
    );
};

export default QuienesSomos;

