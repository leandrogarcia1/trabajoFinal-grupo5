//import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styleNosotros.css";

const data = [
{
    id: 1,
    name: "Leandro Garcia",
    linkedin: "https://www.linkedin.com/in/leandro-federico-garc%C3%ADa-27015a20a/",
    github: "https://github.com/leandrogarcia1",
    instagram: "https://www.instagram.com/leandrogarcia1/",
    image: "public/img/leandro.jpeg",
},
{
    id: 2,
    name: "Esteban Samaniego",
    linkedin: "https://www.linkedin.com/in/esteban-maximiliano-samaniego-33b4a3263/",
    github: "https://github.com/MaxiSama12",
    instagram: "https://www.instagram.com/estebannn_______/",
    image: "public/img/esteban.jpeg",
},
{
    id: 3,
    name: "Yonathan Pachado",
    linkedin: "https://www.linkedin.com/in/yonathan-pachado/",
    github: "https://github.com/YPachado99",
    instagram: "https://www.instagram.com/ypachado99/",
    image: "public/img/Yonathan.jpg",
},
{
    id: 4,
    name: "Ricardo Silva",
    linkedin: "https://www.linkedin.com/in/franco-ricardo-silva-71048421b/",
    github: "https://github.com/ricardosilv1",
    instagram: "https://www.instagram.com/ricardosilv1/",
    image: "public/img/ricardo.jpeg",
},
{
    id: 5,
    name: "Luis Contreras",
    linkedin: "https://www.linkedin.com/in/persona3/",
    github: "https://github.com/LHContreras",
    instagram: "https://www.instagram.com/lhcontreras13/",
    image: "public/img/luis.jpeg",
},
{
    id: 6,
    name: "Nahuel Bardera",
    linkedin: "https://ar.linkedin.com/in/nahuel-francisco-bardera-889094252",
    github: "https://github.com/hermanito135",
    instagram: "https://instagram.com/itzhermanito135?utm_source=qr&igshid=ZGUzMzM3NWJiOQ%3D%3D",
    image: "public/img/nahuel.jpeg",
},

];


const QuienesSomos = () => {
    return (
    <div className="container-QS">
        <h1 className="title-QS">Quiénes Somos</h1>
        <div className="cards-QS">
            {data.map((person) => (
            <div key={person.id} className="card-QS">
                <img className="image-QS" src={person.image} alt={person.name} />
                <h2>{person.name}</h2>
                <div className="links-QS">
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-QS" icon={faLinkedin} />
                    </a>
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-QS" icon={faGithub} />
                    </a>
                    <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon-QS" icon={faInstagram} />
                    </a>
                </div>
            </div>))}
        </div>
    </div>
);
};

export default QuienesSomos;

