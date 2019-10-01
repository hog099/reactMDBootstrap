import React, { useState } from 'react';
import './index.css';

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import Logo from '../logo/index';



export default function Navbar() {

    const [isOpen, toggleCollapse] = useState(false);


    return (
        <Router>
            <div className="navbarContainer">
        <MDBNavbar color="white" light expand="md" className="navbarStyle">
            <MDBNavbarBrand>
                {/* <strong className="">Navbar</strong> */}
                <Logo />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={() => toggleCollapse(!isOpen)} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
               
                <MDBNavbarNav left>
                    
                </MDBNavbarNav>

                <MDBNavbarNav right>
                <MDBNavItem active>
                        <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>   
                    <MDBNavItem>

                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Dropdown</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>

                    </MDBNavItem>
                </MDBNavbarNav>

            </MDBCollapse>
        </MDBNavbar>
            </div>
        </Router>
    );
};
