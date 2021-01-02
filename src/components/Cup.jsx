import React from 'react';

import '../assets/styles/components/Team.css';

function Cup({ cups }) {
    return (
        <React.Fragment>
            {
                cups.map((cup, index) => {
                    return (
                        <div key={index}>
                            <img className="team-image" src={cup.thumbnail} alt={`${cup.title} `} />
                            <p className="team-name">{cup.title}</p>
                        </div>

                    )
                })
            }
        </React.Fragment>
    );
}

export default Cup;