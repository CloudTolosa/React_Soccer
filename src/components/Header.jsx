import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';
import logo from '../assets/logo.png';

function Header(){
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Soccer"/>
      </Link>
    </header>
  );
}

export default Header;