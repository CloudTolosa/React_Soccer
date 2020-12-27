import React from 'react';

import '../assets/styles/components/Footer.css';

function Footer({children, isInfo}){
  return (
    <footer className="footer">
      <div className="containerButtons" style={isInfo && {"width": "100%"}}>
        {children}
      </div>
      <p className="author">By Laura Tolosa Prueba Frontend</p>
    </footer>
  );
}

export default Footer;

