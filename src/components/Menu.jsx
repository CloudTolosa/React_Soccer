import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Team.css';

function Menu({teams}){
  return (
    <React.Fragment>
      {
        teams.map((team, index) => {
          return (
            <Link className="team" key={team.competition.id} to={`/character/${team.id}/info`}>
              <p>{team.competition.name}</p>
            </Link>
          )
        })
      }
    </React.Fragment>
  );
}

export default Menu;