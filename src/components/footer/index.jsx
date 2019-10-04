import React from 'react';

import './index.css';
import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";

export default function footer() {
  return (
    <>
    <footer className="FooterSite">
        <MDBContainer className="containerFooter">

            <MDBRow>
                <MDBCol md="4">
                    <h3>Faça Contato</h3>
                    <a href="tel://004542344599">+45 423 445 99</a>
                    <a href="mailto:help@citytours.com">help@citytours.com</a>
                </MDBCol>

                <MDBCol md="4">
                    <h3>Sobre</h3>
                    <ul>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Register</a></li>
                         <li><a href="/">Terms and condition</a></li>
                    </ul>
                    </MDBCol>

                    <MDBCol md="4">
                    <h3>Descubra</h3>
                    <ul>
                        <li><a href="/">Community blog</a></li>
                        <li><a href="/">Tour guide</a></li>
                        <li><a href="/">Wishlist</a></li>
                         <li><a href="/">Gallery</a></li>
                    </ul>
                    </MDBCol>                    
            </MDBRow>

            
            <MDBRow>
            <MDBCol md="12">
                    <div className="social_footer">
                        <ul>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <p>© Codefique 2019</p>
                    </div>
                </MDBCol>
            </MDBRow>


        </MDBContainer>
    </footer>
    </>
  );
}
