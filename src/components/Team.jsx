import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Team.css';

function Team({teams}){
  return (
    <React.Fragment>
      {
        teams.map((team, index) => {
          return (
            <Link className="team" key={index} to={`/character/${team.id}/info`}>
              <img className="team-image" src={team.thumbnail} alt={`${team.title} `}/>
              <p className="team-name">{team.title}</p>
              
            </Link>
          )
        })
      }
    </React.Fragment>
  );
}

export default Team;