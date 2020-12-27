import React from 'react';
import { Link } from 'react-router-dom';


import '../assets/styles/components/NextAndPrev.css';

const Back = () => (
  <Link to="/" className="button">
    <button>
      Volver
    </button>
  </Link>
);

export default Back;