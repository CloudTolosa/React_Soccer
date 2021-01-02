import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="navbar">
        <img src={logo} alt="Logo Soccer"/>
      <a href="#news">Ligas</a>
      <div class="dropdown">
        <button class="dropbtn">
          Equipos
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
