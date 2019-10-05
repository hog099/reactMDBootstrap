import React from 'react';
import { Router, HashRouter  } from 'react-router-dom'
import Routes from './routes';

import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <>
    <HashRouter  history={history}>
    <Routes />    
    </HashRouter >
    </>
  );
}

export default App;
