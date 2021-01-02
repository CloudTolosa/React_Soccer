import React from 'react';
import ReactDOM from 'react-dom';
import { animateScroll as scroll } from 'react-scroll';

import Team from '../components/Team';
import TeamsList from '../components/TeamsList';
import Menu from '../components/Menu';
import MenuList  from '../components/MenuList'
import Footer from '../components/Footer';

class Home extends React.Component {
  BASE_URL = 'https://www.scorebat.com/video-api/v1/';

  state = {
    loading: true,
    error: null,
    data: '',
    randomArray: [],
    orderArray: [],
  }

  componentDidMount() {
    this.fetchData();

  }

  async fetchData() {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(`${this.BASE_URL}`);
      const data = await response.json();
      this.setState({ loading: false, data: data });
      console.log('Array:', data);
      this.random();
      this.orderCup();

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
    console.log('MyRandom', this.state.randomArray);
  }
  //ordenar las ligas y eliminar las repetidas
  orderCup() {
    let orderArray = this.state.data;

    let hash = {};
    orderArray = orderArray.filter(o => hash[o.competition.id] ? false : hash[o.competition.id] = true);
    this.setState({ orderArray: orderArray });
    console.log('MyList', orderArray);
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
        <MenuList NameClass="containerBarra">
          <Menu teams={this.state.orderArray}/>
        </MenuList>
        <div className="containerVideo">
        <TeamsList NameClass="containerTeams">
          <Team teams={randomArray} />
        </TeamsList>
        </div>
        
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