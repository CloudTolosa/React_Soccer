import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Team.css';
import TeamsList from '../components/TeamsList';
import Footer from '../components/Footer';
import Back from '../components/Back';

class Details extends React.Component {
  BASE_URL = 'https://www.scorebat.com/video-api/v1/';

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData();
  }

  async fetchData(){
    this.setState({loading: true, error: null});
    const character_info = `${this.BASE_URL}/${this.props.match.params.id}`;
    try{
      const response = await fetch(character_info);
      const data = await response.json();
      this.setState({loading: false, data: data});
    } catch(error){
      this.setState({loading: false, error: error});
    }
  }

  render(){
    if(this.state.loading === true && this.state.data === undefined){
      return (
        <TeamsList NameClass="containerTeamInfo">
        </TeamsList>
      );
    }

    if(this.state.error){
      return  <h1 style={{"color": "white"}}>Hubo un error</h1>
    }

    const character = this.state.data;

    return (
      <TeamsList NameClass="containerTeamInfo">
        <div className="team">
          <img className="team-image" src={character.image} alt={`${character.name} image`}/>
        </div>
        <div className="team-info">
          <p>Name: {character.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
        {
          ReactDOM.createPortal(
            <Footer isInfo>
              <Back/>
            </Footer>,
            document.querySelector('.containerApp')
          )
        }
      </TeamsList>
    );
  }
}

export default Details;