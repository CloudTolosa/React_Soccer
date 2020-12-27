import React from 'react';

import '../assets/styles/components/TeamsList.css';

function TeamsList({children, NameClass}){
 return (
    <div className={NameClass}>
      {children}
    </div>
  );
}

export default TeamsList;