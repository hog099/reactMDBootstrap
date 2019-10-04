import React from 'react';

import './index.css';
import { MDBRow } from "mdbreact";

export default function cardwhite() {
    return (
        <>
            <div className="container-cardwhite">

                <div className="cardwhite-title">
                    <h2>Paris <span>Top</span> Tours</h2>
                    <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
                </div>

                <MDBRow>

                    <div className="col-lg-4" >
                        <div className="feature_home">
                            <i className="fas fa-map"></i>
                            <h3><span>+120</span> Premium tours</h3>
                            <p>
                                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
                            <a href="/#/" className="btn_1 outline">Leia Mais</a>
                        </div>
                    </div>

                    <div className="col-lg-4" >
                        <div className="feature_home">
                            <i className="fas fa-map"></i>
                            <h3><span>+120</span> Premium tours</h3>
                            <p>
                                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
                            <a href="/#/" className="btn_1 outline">Leia Mais</a>
                        </div>
                    </div>

                    <div className="col-lg-4" >
                        <div className="feature_home">
                            <i className="fas fa-map"></i>
                            <h3><span>+120</span> Premium tours</h3>
                            <p>
                                Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
						</p>
                            <a href="/#/" className="btn_1 outline">Leia Mais</a>
                        </div>
                    </div>


                </MDBRow>

            </div>
        </>
    );
}
