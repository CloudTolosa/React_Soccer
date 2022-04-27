import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContainerApp from './ContainerApp';
import Home from '../pages/Home';
import DetailTeam from '../pages/DetailTeam';
import DetailsCup from '../pages/DetailCup';
import DetailVideo from '../pages/DetailVideo';
import Statics from '../pages/Statics';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <ContainerApp>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Team/:id" component={DetailTeam}/>
          <Route exact path="/Cup/:id" component={DetailsCup}/>
          <Route exact path="/Video/:id" component={DetailVideo}/>
          <Route exact path="/Estadisticas" component={Statics}/>
        </ContainerApp>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;