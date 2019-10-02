import React from 'react';
import './App.css';

import Navbar from './components/navbar/index';
import Carousel from './components/carousel/index';
import Highlights from './components/highlights/index';
import ListItem from './components/listitem/index';

function App() {
  return (
    <>
    <Navbar />
    <Carousel />
    <Highlights />
    <ListItem />

    </>
  );
}

export default App;
