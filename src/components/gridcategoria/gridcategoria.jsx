import React from 'react';

import './index.css';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Card from '../card01/card';
import PainelCard from '../painelcard/painelcard';

export default function gridcategoria() {
    return (
        <>
            <div className="containerCategoriaItemList">              

                <MDBRow>

                    <MDBCol md="3" className="containerListCategoriaVertical">
                     
                        <div className="boxListCat">
						<ul>
							<li><a href="/"><i className="far fa-square"></i>All restaurants <span>(141)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>Pizza / Italian <span>(20)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>Fart Food <span>(16)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>Japanese <span>(12)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>Chinese <span>(11)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>International <span>(20)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>Coffe bar <span>(08)</span></a>
							</li>
							<li><a href="/"><i className="far fa-square"></i>Fish <span>(08)</span></a>
							</li>
						</ul>
					</div>
                        
                    </MDBCol>

                    <MDBCol md="8" >
                        <div className="containerCategoriaItem">
                           
                            <MDBRow>
                           <Card />
                           <Card />
                           <Card />
                           <Card />
                           <Card />
                            </MDBRow>
                            
                           
                            <MDBRow>
                           <PainelCard />
                           <PainelCard />
                           <PainelCard />
                           <PainelCard />
                           <PainelCard />
                           <PainelCard />
                           <PainelCard />
                            </MDBRow>
                            

                        </div>
                    </MDBCol>



                </MDBRow>
            </div>
        </>
    );
}
