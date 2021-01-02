import React from 'react';

import '../assets/styles/components/MenuList.css';

function MenuList({children, NameClass}){
 return (
    <div className={NameClass}>
      {children}
    </div>
  );
}

export default MenuList;