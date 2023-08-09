import { useState } from "react";
import "./styleHeader.css";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className="Navbar">
      <span className="nav-logo">Code Stockers</span>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Almacen</a>
        <a href="#">Contactos</a>
        <a href="#">Registro</a>
        <a href="#">Login</a>
      </div>
      <div className={`toggleNav ${ isOpen ? 'open' : ''}`} onClick={toggleNav}>
      <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
