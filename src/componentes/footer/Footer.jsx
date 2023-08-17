import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../../assets/img/logo.png';

export default function Footer() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <img
          src={logo}
          className='img-fluid rounded'
          alt='Logo Code Stockers '
          style={{ width: '15%' }} 
        />
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{ color: '#2C5188' }} >Redes</h5>

            <section className='mb-4'>
          <MDBBtn outline color="Primary" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="Primary" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="Primary" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="Primary" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="Primary " floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="Primary  " floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white'  href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}