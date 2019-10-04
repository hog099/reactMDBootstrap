import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/home';
import Categoria from './pages/categoria/categoria';
import Perfil from './pages/perfil/perfil';



function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categoria" component={Categoria} />
            <Route exact path="/perfil" component={Perfil} />
            
            <Redirect from='*' to='/' />
        </Switch>
    );
}

export default Routes;