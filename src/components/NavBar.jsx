import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/NavBar.css";

function NavBar({ cups, teams }) {
  return (
    <React.Fragment>
    <div className="navbar">
        <div className="dropdown">
        <button className="dropbtn">
          Teams
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
        {
        teams.map((team, index) => {
          return (
            <a className="menu-list-item" key={index} href={`/Cup/${team.side2.name}`}>
              {team.side2.name}
            </a>
          )
        })
      }
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Cup
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {
        cups.map((cup) => {
          return (
            <a className="menu-list-item" key={cup.competition.id} href={`/Cup/${cup.competition.id}`}>
              {cup.competition.name}
            </a>
          )
        })
      }
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default NavBar;
