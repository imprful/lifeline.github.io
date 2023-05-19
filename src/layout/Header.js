import React from "react";
import { Link, NavLink } from "react-router-dom";
import Products from "../pages/Products";
import logo from "../images/logo.jpg";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to
          <br />
          <h3>"Lifeline Grocery Store"</h3>
        </p>
        
        
        <NavLink
            type="button"
            className="btn btn-success"
            to={"https://localhost:44393/View/Login.aspx" }
            target="_blank"
            // style={{ margin: "3px" }}
          >
           Go to Grocery-Management-Store Login
          </NavLink>
          <br/>
          <NavLink type="button" className="btn btn-primary" to={`/home`}>
          Start Shopping
        </NavLink>

        <br />
        
      </header>
<br/>
      
       
        <footer>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Our Details:</span>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <b>Praful Vairagade</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>Vikram Jadhav</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>Prerana N</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>Mandar Pande</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>Omkar Raut</b>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company PRN</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <b>220950120128</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>220950120218</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>220950120139</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>220950120094</b>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <b>220950120146</b>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Email Id</h6>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                lifeline.impraful@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                lifeline.imvikram@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                lifeline.imprerana@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                lifeline.immandar@gmail.com
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                lifeline.imomkar@gmail.com
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 70385 62238
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 77769 69804
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 97659 11317
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 89997 94013
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 97622 14179
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3000/'>
          Lifeline.com
        </a>
      </div>
    </MDBFooter>
    </footer>
    
      
    </div>
    
  );
}
