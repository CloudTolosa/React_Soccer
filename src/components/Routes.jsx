import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContainerApp from './ContainerApp';
import Home from '../pages/Home';
import Details from '../pages/Details';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <ContainerApp>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Cup/:id/info" component={Details}/>
        </ContainerApp>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;