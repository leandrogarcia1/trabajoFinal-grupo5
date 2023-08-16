import React, { useState } from "react";
import "./styleFormContacto.css";
import { Link } from 'react-router-dom'

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí enviar los datos del formulario al servidor
        console.log("Form data:", formData);
        // Reiniciamos el formulario.
        setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
    });
};

    return (
    <div className="container-contacto">
    <div className="card">
        <div className="card-header">
            <h2 className="text-header">Contacto</h2>
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre: </label>
                <input
                    className="form-control"                                                                                                        
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido: </label>
                <input
                    className="form-control"
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Teléfono: </label>
                <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje: </label>
                <textarea
                    className="form-textarea form-control"
                    type="text"
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    </div>
    </div>
);
};

export default Contacto;
