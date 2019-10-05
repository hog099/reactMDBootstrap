import React from 'react';

import './index.css';
import Navbar from '../../components/navbar/index';
import BannerProfile from '../../components/bannerprofile/bannerprofile';
import ItemsInfo from '../../components/iteminfo/iteminfo';
import CardRightProfile01 from '../../components/cardrightprofile01/cardrightprofile01';
import DescriptionProfile from '../../components/descriptonprofile/descriptionprofile';
import Offers from '../../components/offers/offers';
import Footer from '../../components/footer/index';

import { MDBRow, MDBCol } from "mdbreact";



export default function categoria() {
    return (
        <>
            <Navbar />
            <BannerProfile />

            <MDBRow>
                {/* COLUNA DE FEED */}
                <MDBCol md="8">

                    <ItemsInfo />
                    <DescriptionProfile />
                <Offers />
                </MDBCol>

                {/* COLUNA DE ITEMS VERTICAL */}
                <MDBCol md="4">
                <CardRightProfile01 />
                </MDBCol>


            </MDBRow>




            <Footer />
        </>
    );
}
