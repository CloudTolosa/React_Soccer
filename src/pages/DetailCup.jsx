import React from 'react';

import '../assets/styles/components/Team.css';
import Team from '../components/Team';
import TeamsList from '../components/TeamsList';

class DetailsCup extends React.Component {
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
            this.getCup();
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    getCup() {

        let data = this.state.data;
        let cup = this.props.match.params.id;
        // Filtro de data con el parametro de navegacion
        let result = data.filter(item => item.competition.id === cup)
        this.setState({ result: result });

    }

    render() {

        if (this.state.loading === true && this.state.data === undefined) {
            return (
                <TeamsList NameClass="containerTeams">
                </TeamsList>
            );
        }

        if (this.state.error) {
            return <h1 style={{ "color": "white" }}>Hubo un error</h1>
        }

        let teams = this.state.result;

        return (
            <TeamsList NameClass="containerTeams">
                <Team teams={teams} />
               
            </TeamsList>
        );
    }
}

export default DetailsCup;