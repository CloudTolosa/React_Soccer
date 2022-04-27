import React, { useEffect, useState } from "react";

import { Chart as ChartJS, BarElement, ArcElement,CategoryScale,LinearScale,Title, Tooltip, Legend } from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";
import '../assets/styles/components/Statics.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,LinearScale,BarElement,Title);

const Statics = () => {

  const [datos, setDatos] = useState([0,1,2,3,4]);
  const [nombres, setNombres] = useState(['Copa 1','Copa 2','Copa 3','Copa 4','Copa 5']);

  let BASE_URL = 'https://www.scorebat.com/video-api/v1/';

  let data = {
    labels:nombres.slice(0,5),
    datasets: [
      {
        label: "Partidos jugados por Liga",
        data: datos.slice(0,5),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      
    ],
  }
  let dataBar = {
      labels:nombres.slice(0,5),
      datasets: [
        {
          label: 'partidos',
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: datos.slice(0,5),
        }
      ]
  }

  let options = {
    responsive: true,
  plugins: {
    legend: {
      display:false,
    },
    title: {
      display: true,
      //text: 'Chart.js Bar Chart',
    },
  },
  }
  useEffect(() => {
    const getDatosGuardados = async () => {
        try {
          const response = await fetch(`${BASE_URL}`);
          const result = await response.json();
          //Copas
          let hash = {};
          let orderCup = result.filter(o => hash[o.competition.name] ? false : hash[o.competition.name] = true);
          let orderA = orderCup.sort((a, b) => (a.competition.name > b.competition.name) ? 1 : -1)
          let orderName = orderA.map(nombre => nombre.competition.name)
          let orderB = result.map(nombre => nombre.competition.name)
          var repetidos = [];
          orderB.forEach(function(competition){
            repetidos[competition] =(repetidos[competition]|| 0) + 1;
          });
          let numeros = Object.values(repetidos)
          setNombres(orderName)
          setDatos(numeros);
        } catch (error) {
          console.log(error)
        }
    };
    getDatosGuardados();
  }

, []);

  return (
    <>
    <h1>Estadisticas</h1>
      <div className="wrapper">
        <div className="dona">
          <h2>Partidos jugados por Copa</h2>
          <Doughnut
            data={data}
            />
          </div>
          <div className="barra">
          <h2>Partidos jugados por Copa en barra</h2>
          <Bar
            options={options}
            data={dataBar}
            />
          </div>
        </div>
    </>
  )
}

export default Statics


