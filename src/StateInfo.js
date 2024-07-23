// StateInfo.js
import React from 'react';

const StateInfo = ({ state }) => {
  if (!state) return <div>Select a state to see details</div>;

  return (
    <div className="state-info">
      <h2>{state.name}</h2>
      <p>Population Density: {state.density} people per square mile</p>
    </div>
  );
};

export default StateInfo;
