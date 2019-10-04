import React from 'react';

import './index.css';

import { MDBCardImage  } from "mdbreact";
import imgcard from '../../assets/logo.png';


export default function card01() {
    return (
        <>
            <div className="cardhighlight">
                <div className="cardhighlight-container">

                    <div className="img-cardhighlight">
                        <a href="/#/">
                            <MDBCardImage src={imgcard} className="img-fluid" alt="image-card" />
                            <div className="cardshortinfo">
                                <i className="fas fa-user"> </i> Historic Buildings
                                    <span><sup>$</sup>39</span>
                            </div>
                        </a>
                    </div>

                    <div className="cardhighlight-footer">
                        <h3><strong>Arc Triomphe</strong> tour</h3>

                        <div className="rating">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><small>(75)</small>
                        </div>

                        <div className="iconright">
                            <a href="/#"><i className="fas fa-arrow-right"></i></a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
