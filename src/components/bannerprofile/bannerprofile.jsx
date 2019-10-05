import React from 'react';

import './index.css';

import { MDBRow, MDBCol, MDBCardTitle } from "mdbreact";


export default function bannerprofile() {
  return (
    <>
    <div className="BannerProfileContainer" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>     
      <MDBRow>       
            <MDBCol>              
                <div className="bannerProfileInfo">
                <MDBCardTitle className="titlebannerProfile">
                    <h3>Nome da Empresa</h3>
                    </MDBCardTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p> 
                </div>
            </MDBCol>
      </MDBRow>
    </div>
    </>
  );
}
