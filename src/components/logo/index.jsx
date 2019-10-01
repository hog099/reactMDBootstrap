import React from 'react'
import './index.css';
// import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import logo from '../../assets/logo.png';

export default props =>
    <aside className="logo">
        <a href="/#" className="logo img-fluid">
            <img src={logo} alt="logo" />
        </a>
</aside>
