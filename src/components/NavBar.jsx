import React from "react";

import "../assets/styles/components/NavBar.css";
import { useHistory } from "react-router-dom";

function NavBar({ cups, teams }) {
  let history = useHistory();
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
        <div className="dropdown">
          <button className="dropbtn" onClick={()=>history.push("/Estadisticas")}>
            Statics
            <i className="fa fa-caret-down"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
