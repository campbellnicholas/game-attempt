import React, { useState, useEffect } from 'react';
import './App.scss';
import Map from './components/Map/Map';
import Player from './components/Player/Player';

function App() {

  // Player Position

  // TODO: Call in these boundaries from a contants file or a separate config
  const boundaries = [1,16,16,1];

  // HOOKS: useState
  // REACT: Lifting up state
  const [position, setPosition] = useState('7/8');

  const updatePosition = update => {
      const oldPosition = position.split('/').map(num => parseInt(num));

      // Vertical boundaries
      if ((oldPosition[0] + update[0] < boundaries[0]) || oldPosition[0] + update[0] > boundaries[2]) return;
      // Horizontal boundaries
      if ((oldPosition[1] + update[1] < boundaries[3]) || oldPosition[1] + update[1] > boundaries[1]) return;

      const newPosition = oldPosition.map((coord, i) => `${coord + update[i]}`);
      
      setPosition(newPosition.join('/'));
  }

  const handleKeyPress = event => {
      switch (event.key) {
          case 'ArrowUp':
              updatePosition([-1,0]);
              break;
          case 'ArrowRight':
              updatePosition([0,1]);
              break;
          case 'ArrowDown':
              updatePosition([1,0]);
              break;
          case 'ArrowLeft':
              updatePosition([0,-1]);
              break;
          default:
              break;
      }
  }

  // HOOKS: useEffect
  useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);

      return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // End Player Position

  return (
    <div className="App">
      <div className="map">
        <Map />
        <Player gridArea={position} />
      </div>
      <div className="info"></div>
      <div className="notes"></div>
    </div>
  );
}

export default App;
