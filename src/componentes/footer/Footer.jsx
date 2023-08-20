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
          <a href="/nosotros"><h5 className='text-uppercase m-2' style={{ color: '#2C5188' }} >Nosotros</h5></a>

            <h5 className='text-uppercase ' style={{ color: '#2C5188' }} > Nuestras Redes:</h5>

            <section className='mb-4'>
          <MDBBtn outline color="Primary" floating className='m-1' href='https://www.facebook.com/RollingCodeSchool' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          

          <MDBBtn outline color="Primary" floating className='m-1' href='https://www.instagram.com/rollingcodeschool/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="Primary " floating className='m-1' href='https://www.linkedin.com/company/rollingcode/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

        
          

        </section>
          </MDBCol>
          

        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
       <p>

       </p>
        
      </div>
    </MDBFooter>
  );
}