import React from 'react';

import '../assets/styles/components/ContainerApp.css';

import Header from './Header';
import ContainerTeams from './ContainerTeams';

function ContainerApp({children}){
  return (
    <div className="containerApp">
      {/* <Header/> */}

      <ContainerTeams>
        {children}
      </ContainerTeams>
    </div>
  );
}

export default ContainerApp;