import React from 'react';
import ReactDOM from 'react-dom';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from '../components/NavBar';
import Team from '../components/Team';
import TeamsList from '../components/TeamsList';
import Footer from '../components/Footer';

class Home extends React.Component {
  BASE_URL = 'https://www.scorebat.com/video-api/v1/';

  state = {
    loading: true,
    error: null,
    data: '',
    randomArray: [],
    orderCup: [],
    orderTeam: [],
  }

  componentDidMount() {
    this.fetchData();

  }

  //Llamado al Api
  async fetchData() {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(`${this.BASE_URL}`);
      const data = await response.json();
      this.setState({ loading: false, data: data });
      this.random();
      this.orderCup();
      this.orderTeam();

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  // Valores random hasta 5 para videos
  random() {
    let data = this.state.data;
    var randomArray = [];
    for (var n = 0; n < 5; n++) {
      var randomA = data[Math.floor(Math.random() * data.length)]
      randomArray.push(randomA);
    }
    this.setState({ randomArray: randomArray });
  }

  //ordenar las ligas y eliminar las repetidas
  orderCup() {
    let orderCup = this.state.data;

    let hash = {};
    orderCup = orderCup.filter(o => hash[o.competition.name] ? false : hash[o.competition.name] = true);
    let orderA = orderCup.sort((a, b) => (a.competition.name > b.competition.name) ? 1 : -1)
    this.setState({ orderCup: orderA });
  }
  
  //ordenar los equipos y eliminar los repetidos
  orderTeam() {
    let orderTeam2 = this.state.data;
    let hash = {};
    orderTeam2 = orderTeam2.filter(o => hash[o.side2.name]  ? false : hash[o.side2.name] = true);
    let orderTeamA = orderTeam2.sort((a, b) => (a.side2.name > b.side2.name) ? 1 : -1)
    this.setState({ orderTeam: orderTeamA});
  }

  scrollTop() {
    this.time = setTimeout(() => {
      scroll.scrollToTop();
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  render() {
    let randomArray = this.state.randomArray;

    if (this.state.loading === true || this.state.data === undefined) {
      return (
        <TeamsList NameClass="containerTeams">
          <h1 style={{ "color": "white" }}>No hay elementos</h1>
        </TeamsList>
      );
    }

    if (this.state.error) {
      return (
        <h1 style={{ "color": "white" }}>Hubo un error</h1>
      );
    }
    
    return (
      
      <React.Fragment >
       { /*Barra de navegacion*/ }
        <Navbar cups={this.state.orderCup} teams={this.state.orderTeam}/>
        { /*Contenido con Partidos Random*/ }
        <TeamsList NameClass="containerTeams">
          <Team teams={randomArray} />
        </TeamsList>
        
        {
          ReactDOM.createPortal(
            <Footer />,
            document.querySelector('.containerApp')
          )
        }
      </React.Fragment>
    );
  }
}

export default Home;