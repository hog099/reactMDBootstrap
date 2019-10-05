import React from 'react';

import './index.css';
import { MDBRow, MDBCol } from "mdbreact";


import PainelCard from '../painelcard/painelcard';

export default function gridcategoria() {
    return (
        <>
            <div className="containerOffersItemList">

                <div className="maintitleoffers">
                    <h2>Top <span>Promoções</span></h2>
                </div>

                <MDBRow>
                    <MDBCol md >
                        <div className="containerOffersItem">
                            
                                <PainelCard />
                                <PainelCard />
                                <PainelCard />
                                <PainelCard />
                                <PainelCard />
                                <PainelCard />
                                <PainelCard />
                            


                        </div>
                    </MDBCol>

                </MDBRow>
            </div>
        </>
    );
}
