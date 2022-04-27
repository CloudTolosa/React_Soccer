import React from 'react';

import '../assets/styles/components/Team.css';

class DetailVideo extends React.Component {
    BASE_URL = 'https://www.scorebat.com/video-api/v1/';

    state = {
        loading: true,
        error: null,
        data: '',
        result:[],
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        this.setState({ loading: true, error: null });
        const character_info = `${this.BASE_URL}`;
        try {
            const response = await fetch(character_info);
            const data = await response.json();
            this.setState({ loading: false, data: data });
            this.getVideo();
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    getVideo() {

        let data = this.state.data;
        let video = this.props.match.params.id;
        
        // Filtro de data con el parametro de navegacion
        let result = data.filter(item => item.title === video)
        this.setState({ result: result });

    }

    render() {

        let teams = this.state.result;
        return (
            <React.Fragment>
            {
              teams.map((team, index) => {
                 
                return (
                    <img key={index} className="team-image" src={team.thumbnail} alt={`${team.title} `}/>
                )
              })
            }
          </React.Fragment>

            
        );
    }
}

export default DetailVideo;
