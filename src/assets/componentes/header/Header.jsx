import { useState } from "react";
import "./styleHeader.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
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
      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
