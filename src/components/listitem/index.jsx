import React from 'react';
import './index.css';

import { MDBRow, MDBCol } from "mdbreact";

export default function highlights() {

    return (
        <>
            <div className="container-itemlist">

                <div className="titleItemlist">
                    <h2>Categorias <span>Populares</span></h2>
                    <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
                </div>


                <MDBRow>

                <MDBCol md className="content-listitem">
                    
                        <ul>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Tour Eiffel
                                <span className="other_tours_price">$42</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Shopping tour
                                <span className="other_tours_price">$35</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Versailles tour
                                <span className="other_tours_price">$20</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Montparnasse skyline
                                <span className="other_tours_price">$26</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Pompidue
                                <span className="other_tours_price">$26</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Senna River tour
                                <span className="other_tours_price">$32</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Tour Eiffel
                                <span className="other_tours_price">$42</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Shopping tour
                                <span className="other_tours_price">$35</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Versailles tour
                                <span className="other_tours_price">$20</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Montparnasse skyline
                                <span className="other_tours_price">$26</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Pompidue
                                <span className="other_tours_price">$26</span>
                            </a>
                            </li>
                            <li><a href="/#/">
                                <i className="fas fa-building"></i>Senna River tour
                                <span className="other_tours_price">$32</span>
                            </a>
                            </li>
                        </ul>

                       </MDBCol>




                </MDBRow>
            </div>

        </>
    );
}
