import React from 'react';

import './index.css';

import { MDBRow, MDBCol } from "mdbreact";

export default function descriptonprofile() {
    return (
        <>
            <div className="containerDescriptionProfile">
                <MDBRow>
                    <MDBCol md="3">
                        <h3>Sobre Nós</h3>
                    </MDBCol>
                    <MDBCol md="9">
                        <p>
                            Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.
							</p>
                        <h4>Incluso na Estadia/Uso</h4>
                        <p>
                            Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.
							</p>
                        <MDBRow>
                            <MDBCol md="6">
                                <ul className="listitemdescription">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>No scripta electram necessitatibus sit</li>
                                    <li>Quidam percipitur instructior an eum</li>
                                    <li>Ut est saepe munere ceteros</li>
                                    <li>No scripta electram necessitatibus sit</li>
                                    <li>Quidam percipitur instructior an eum</li>
                                </ul>
                            </MDBCol>
                            <MDBCol md="6">
                                <ul className="listitemdescription">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>No scripta electram necessitatibus sit</li>
                                    <li>Quidam percipitur instructior an eum</li>
                                    <li>No scripta electram necessitatibus sit</li>
                                </ul>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}
