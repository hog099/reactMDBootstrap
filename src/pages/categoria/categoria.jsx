import React from 'react';

import './index.css';
import Navbar from '../../components/navbar/index';
import BannerCategorias from '../../components/bannercategoria/bannerCategoria';
import Gridcategoria from '../../components/gridcategoria/gridcategoria';
import Footer from '../../components/footer/index';

export default function categoria() {
  return (
    <>
      <Navbar />
      <BannerCategorias />
      <Gridcategoria />
      <Footer />
    </>
  );
}
