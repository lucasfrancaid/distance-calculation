import React, { useState } from 'react';
import apiDistance from './services/apiDistance';
import { FaMapMarkerAlt } from 'react-icons/fa';

import './styles/App.css';
import './styles/main.css';
import './styles/global.css';
import './styles/sidebar.css';

import DistanceForm from './components/DistanceForm/index';
import {Map, DistanceResult}  from './components/DistanceResult/index';

function App() {
  const [result, setResult] = useState([])

  async function handleCalculation(data) {
    const response = await apiDistance.post('/Distance', data)

    setResult(response.data)
  }

  return (
    <div id="app">
      <aside>
        <strong>
            <FaMapMarkerAlt className="icon" />
            <p>Distance calculation</p>
        </strong>
        <DistanceForm onSubmit={handleCalculation} />
      </aside>
      <main>
      <DistanceResult distance={result.distance} duration={result.duration} />
        <Map origins={result.origins} destinations={result.destinations} zoom={result.zoom} center={result.center} />
      </main>

    </div>
    );
}

export default App;