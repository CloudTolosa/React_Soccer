import React from 'react';

import '../assets/styles/components/TeamsList.css';

function CupList({children, NameClass}){
 return (
    <div className={NameClass}>
      {children}
    </div>
  );
}

export default CupList;
