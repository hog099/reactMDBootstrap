import React from 'react';
import './index.css';

import { MDBRow, MDBCol, MDBCardImage  } from "mdbreact";

import Card from '../card01/card';

export default function highlights() {

    return (
        <>
            <div className="container-highlights">
           
                    <div className="container-maintitle">
                        <h2>Paris <span>Top</span> Tours</h2>
                        <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
                    </div>

                <MDBRow>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>
                    
                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    <MDBCol md="3" >
                       <Card />
                    </MDBCol>

                    


                </MDBRow>
            </div>

        </>
    );
}
