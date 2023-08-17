import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import "./styleBotonHome.css"
const BotonHomeAdm = () => {
  return (
    
    <Link to="/homeadm">
        <div className="botonHome">
        <Fragment>
      <MDBBtn outline color="primary">Volver al Home</MDBBtn>
      
    </Fragment>
        </div>
    
    </Link>
  );
}

export default BotonHomeAdm;