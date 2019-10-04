import React from 'react';

import './index.css';

import { MDBCardImage  } from "mdbreact";
import Imgcard from '../../assets/logo.png';


export default function PainelCard() {
    return (
        <>
            <div className="PainelCard">

            
						<div className="row">
							<div className="col-lg-4 col-md-4">
																
								<div className="imglistpainelcard">
									<a href="single_tour.html"><img src={Imgcard} alt="Image" />							
									</a>
								</div>                                
							</div>

							<div className="col-lg-6 col-md-6">
								<div className="painelcardbody">
									
									<h3><strong>Arch Triomphe</strong> tour</h3>
									<p>Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>

									<ul className="infoA">
										<li>
											<i className="far fa-clock"></i>
										</li>
										<li>
											<i className="far fa-clock"></i>
										</li>
										<li>
											<i className="far fa-clock"></i>
										</li>
										<li>
											<i className="far fa-clock"></i>
										</li>
										<li>
											<i className="far fa-clock"></i>
										</li>

										
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-2">
								<div className="iconItemRight">
									<div>
                                        <sup>$</sup>39

										<p>
                                            <a href="single_tour.html" className="btn_1">Details</a>
										</p>
									</div>

								</div>
							</div>
						</div>
					

            </div>
        </>
    );
}
