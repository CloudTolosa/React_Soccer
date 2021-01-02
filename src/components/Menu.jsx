import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Menu.css';

function Menu({ teams }) {
  return (
    <React.Fragment>
      {
        teams.map((team, index) => {
          return (
            <Link className="menu-list-item" key={team.competition.id} to={`/Cup/${team.competition.id}`}>
              <ol>{team.competition.name}</ol>
            </Link>
          )
        })
      }
    </React.Fragment>
  );
}

export default Menu;