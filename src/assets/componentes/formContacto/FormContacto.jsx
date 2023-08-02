import React, { useState } from "react";
import './styleFormContacto.css'

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
    // aqui enviar los datos del formulario al servidor
    console.log("Form data:", formData);
    // reiniciamos el formulario.
    setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
    });
};

return (
    <div>
    <h2>Contacto</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nombre">Nombre: </label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label htmlFor="apellido">Apellido: </label>
            <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
        />
        </div>
        <div>
            <label htmlFor="telefono">Teléfono: </label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.telefono}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit">Enviar</button>
    </form>
    </div>
);
};

export default Contacto;
