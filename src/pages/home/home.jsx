import React from 'react';
import './index.css';

import Navbar from '../../components/navbar/index';
import Carousel from '../../components/carousel/index';
import Highlights from '../../components/highlights/index';
import ListItem from '../../components/listitem/index';
import CardWhite from '../../components/cardwhite/index';
import Footer from '../../components/footer/index';

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Highlights />
    <ListItem />
    <CardWhite />
    <Footer />
    </>
  );
}

export default App;
