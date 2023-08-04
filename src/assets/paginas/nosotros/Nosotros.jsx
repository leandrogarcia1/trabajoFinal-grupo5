//import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styleNosotros.css";

const data = [
{
    id: 1,
    name: "Leandro Garcia",
    linkedin: "https://www.linkedin.com/in/persona1/",
    github: "https://github.com/persona1",
    instagram: "",
    image: "public/img/persona.jpeg",
},
{
    id: 2,
    name: "Esteban Samaniego",
    linkedin: "https://www.linkedin.com/in/esteban-maximiliano-samaniego-33b4a3263/",
    github: "https://github.com/persona2",
    instagram: "",
    image: "public/img/esteban.jpeg",
},
{
    id: 3,
    name: "Yonathan Pachado",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
    image: "public/img/Yonathan.jpg",
},
{
    id: 4,
    name: "Ricardo",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
    image: "public/img/ricardo.jpeg",
},
{
    id: 5,
    name: "Luis",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "",
    image: "public/img/luis.jpeg",
},
{
    id: 6,
    name: "Nahuel",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/persona3",
    instagram: "https://instagram.com/persona3",
    image: "public/img/persona.jpeg",
},

];

// ...otros importes...

const QuienesSomos = () => {
    return (
    <div className="container-nosotros">
        <h1 className="titulo-nosotros">Quiénes Somos</h1>
        <div className="nosotros-cards">
            {data.map((person) => (
            <div key={person.id} className="nosotros-card">
                <img className="nosotros-image" src={person.image} alt={person.name} />
                <h2>{person.name}</h2>
                <div className="nosotros-links">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="nosotros-icon" icon={faLinkedin} />
                    </a>
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="nosotros-icon" icon={faGithub} />
                    </a>
                    <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="nosotros-icon" icon={faInstagram} />
                    </a>
                </div>
            </div>))}
        </div>
    </div>
);
};

export default QuienesSomos;

