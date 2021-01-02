import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContainerApp from './ContainerApp';
import Home from '../pages/Home';
import Details from '../pages/Details';
import DetailsCup from '../pages/DetailCup';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <ContainerApp>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Detail/:id/info" component={Details}/>
          <Route exact path="/Cup/:id" component={DetailsCup}/>
        </ContainerApp>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;