// App.js
import React, { useState } from 'react';
import MapComponent from './MapComponent';
import StateInfo from './StateInfo';
import './App.css';

function App() {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div className="App">
      <h1>US Population Density Map</h1>
      <MapComponent onStateClick={handleStateClick} />
      <StateInfo state={selectedState} />
    </div>
  );
}

export default App;
