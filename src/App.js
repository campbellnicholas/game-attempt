import React, { useState, useEffect } from 'react';
import './App.scss';
import Map from './components/Map/Map';
import Player from './components/Player/Player';
import Alert from './components/Alert/Alert';
import { Maps } from './layers/maps/Maps';

// TODO: Call in these boundaries from a contants file or a separate config
const boundaries = [1,16,16,1];

function App() {

  // Player Position

  // HOOKS: useState
  // REACT: Lifting up state
  const [alert, setAlert] = useState('');
  const [position, setPosition] = useState('7/8');
  const [mapLayer, setMapLayer] = useState(Maps.greenHill);
  let obstacles = [];
  let passages = [];


  


  const updatePosition = update => {
      const oldPosition = position.split('/').map(num => parseInt(num));

      // Vertical boundaries
      if ((oldPosition[0] + update[0] < boundaries[0]) || oldPosition[0] + update[0] > boundaries[2]) return;
      // Horizontal boundaries
      if ((oldPosition[1] + update[1] < boundaries[3]) || oldPosition[1] + update[1] > boundaries[1]) return;

      const newPosition = oldPosition.map((coord, i) => `${coord + update[i]}`);

      // Stop at obstacle
      if (obstacles && obstacles.includes(newPosition.join('/'))) {
        // TODO: Create Alert structure to add to the Info space based on the alert state
        return;
      }
      
      setPosition(newPosition.join('/'));

      // Check if block is a passage
      if (passages && passages.some(passage => passage.position === newPosition.join('/'))) {
        const newMap = passages.filter(passages => passages.position === newPosition.join('/'));
        newMap?.[0]?.to && setMapLayer(Maps[newMap[0].to]);
        newMap?.[0]?.alert && setAlert(newMap[0].alert);
      }
  }

  // TODO: Find the answer for the warning about this being in the App structure 
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

  useEffect(() => {

    // TODO: Make this reduce function a reusable utility

    // Get the obstacles
    // HOOKS: useEffect
    // ARRAY.REDUCE
    /* WHY DOES THIS WORK?
      * result = the accumulation of all the values
      * key = the keys for the object, which is what the original array is
      * [] = the intial value for result
      * 
      * As the reduce callback runs through each key in mapLayer.obstacles, 
      * it concatenates what it's accumulated with what it value of the
      * next key until it has all of the values concatenated together creating
      * one large array.
    */
    obstacles = mapLayer?.obstacles && Object.keys(mapLayer.obstacles).reduce((result, key) => {
      return result.concat(mapLayer.obstacles[key]);
    }, []);

  }, [obstacles]);

  useEffect(() => {
     // Get the passages
     // TODO: Make this reduce function a reusable utility
     passages = mapLayer?.passages && Object.keys(mapLayer.passages).reduce((result, key) => {
      return result.concat(mapLayer.passages[key]);
    }, []);
  }, [passages]);

  return (
    <div className="App">
      <div className="map">
        <Map {...mapLayer} />
        <Player gridArea={position} />
      </div>
      <div className="info">
        <p>{position}</p>
        <p>{mapLayer?.name && `Location: ${mapLayer.name}`}</p>
        {alert && <Alert message={alert} />}
      </div>
      <div className="notes"></div>
    </div>
  );
}

export default App;
