import React, { useState } from "react";
import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";

export default function NuevoUsuario() {
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    role: "",
    mail: "",
    contraseña: "",
    telefono: "",
    url: "",
    usuarioAdm: "",
  });
  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value }); //actualizo el estaco con el valor del input
  };

  const handleSudmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(
        "http://localhost:8081/api/user/register",
        dataUser
      );
      console.log(response);
      setDataUser({
        nombre: "",
        apellido: "",
        role: "",
        mail: "",
        contraseña: "",
        telefono: "",
        url: "",
        usuarioAdm: "",
      });
    } catch (error) {
      console.log(error);
    }
  }; //envio los datos a mi fake api

  return (
    <>
      <Container>
        <Row>
          <Col md="6" className="d-none d-md-block">
            <img src="../public/img/registro.png" alt="" />
          </Col>

          <Col md="6">
            <form onSubmit={handleSudmit}>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    value={dataUser.nombre}
                    onChange={handleChange}
                    name="nombre"
                    label="Nombre"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    value={dataUser.apellido}
                    onChange={handleChange}
                    name="apellido"
                    label="Apellido"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.role}
                onChange={handleChange}
                name="role"
                label="Role"
              />

              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.mail}
                onChange={handleChange}
                type="email"
                name="mail"
                label="Mail"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.contraseña}
                onChange={handleChange}
                label="Contraseña"
                name="contraseña"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.telefono}
                onChange={handleChange}
                type="tel"
                name="telefono"
                label="Telefono"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.url}
                onChange={handleChange}
                label="URL Imagen"
                name="url"
                type="url"
              />
              <MDBInput
                wrapperClass="mb-4"
                value={dataUser.usuarioAdm}
                onChange={handleChange}
                label="¿Es un usuario Adm?"
                name="usuarioAdm"
                type="text"
              />

              <MDBBtn className="mb-4" type="submit" block>
                Crear Nuevo Usuario
              </MDBBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
