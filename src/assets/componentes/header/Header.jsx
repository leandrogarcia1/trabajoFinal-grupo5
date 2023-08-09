import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { MDBNavbarNav } from 'mdb-react-ui-kit';

export default function Header() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBCollapse show={showNavExternal}>
        <div className='bg-dark p-4'>
        <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#' style={{ color: '#FFFFFF' }} >
              Almacen
            </MDBNavbarLink>
            <MDBNavbarLink href='#' style={{ color: '#FFFFFF' }}>Ventas</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Gestion Proveedores</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Pedidos</MDBNavbarLink>
            <MDBNavbarLink href='#'style={{ color: '#FFFFFF' }}>Informe y Analisis</MDBNavbarLink>
            <MDBNavbarLink  href='/users'  style={{ color: '#FFFFFF' }}>
              Control de Usuarios
            </MDBNavbarLink>
          </MDBNavbarNav>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}