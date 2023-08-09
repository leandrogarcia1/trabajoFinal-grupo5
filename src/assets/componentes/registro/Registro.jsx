import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from '../../img/logo.png';
import UsuarioControl from '../../paginas/usuariosControl/UsuariosControl';


export default function Registro() {
    const [loginRegisterActive, setLoginRegisterActive] = useState('login');

  const handleLoginRegisterClick = (tab) => {
    setLoginRegisterActive(tab);
  };
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #787499,#A37c86, #2C5188)' }}>
        <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0 m-3 d-flex justify-content-center align-items-center ' >
          <MDBCol md='4'>
            <MDBCardImage src={logo} alt='Logo Code Stockers ' fluid  />
          </MDBCol>
          <MDBCol md='8'>
          <div>
        

        <MDBTabsContent>
          <MDBTabsPane show={loginRegisterActive === 'login'}>
            <form className='m-3'>
              <h2 className='text-center m-5'>Bienvenido</h2>

              <MDBInput className='mb-4 ' type='email' id='form7Example1' label='Email address' />
              <MDBInput className='mb-4' type='password' id='form7Example2' label='Password' />

              <MDBRow className='mb-4'>
                <MDBCol className='d-flex justify-content-center'>
                  <MDBCheckbox id='form7Example3' label='Remember me' defaultChecked />
                </MDBCol>
                <MDBCol>
                  <a href='#!'>Forgot password?</a>
                </MDBCol>
              </MDBRow>
               
              <MDBBtn type='submit' className='mb-4' color='danger' block>
                Sign in
              </MDBBtn>
              
              
              

              
            </form>
          </MDBTabsPane>
          <MDBTabsPane show={loginRegisterActive === 'register'}>
            <form>
              <p className='text-center'>or:</p>

              <MDBInput className='mb-4' id='form8Example1' label='Name' />
              <MDBInput className='mb-4' id='form8Example2' label='Username' />
              <MDBInput className='mb-4' type='email' id='form8Example3' label='Email address' />
              <MDBInput className='mb-4' type='password' id='form8Example4' label='Password' />
              <MDBInput className='mb-4' type='password' id='form8Example5' label='Repeat password' />

              <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form8Example6'
                label='I have read and agree to the terms'
                defaultChecked
              />

              <MDBBtn type='submit' className='mb-4' block>
                Sign in
              </MDBBtn>
            </form>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
    
  );
}