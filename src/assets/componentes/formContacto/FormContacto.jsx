import React, { useState } from "react";

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
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
        name: "",
        email: "",
        phone: "",
        message: "",
    });
};

return (
    <div>
    <h2>Contacto</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="phone">Teléfono:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
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
