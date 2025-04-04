import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.scss';
import Map from './components/Map/Map';
import Player from './components/Player/Player';
import Alert from './components/Alert/Alert';
import { Maps } from './layers/maps/Maps';
import { updatePosition as updatePositionUtil } from './utils/positionUtils';

// TODO: Call in these boundaries from a contants file or a separate config
const boundaries = [1,16,16,1];

function App() {

  // Player Position

  // HOOKS: useState
  // REACT: Lifting up state
  const [alert, setAlert] = useState('');
  const [alertType, setAlertType] = useState('info');
  const [position, setPosition] = useState('7/8');
  const [mapLayer, setMapLayer] = useState(Maps.greenHill);
  const obstacles = useRef([]);
  const passages = useRef([]);


  


  const updatePosition = useCallback(update => {
    const result = updatePositionUtil(
      position,
      update,
      boundaries,
      obstacles.current,
      passages.current
    );

    if (result) {
      setPosition(result.position);
      if (result.mapChange) {
        setMapLayer(Maps[result.mapChange]);
      }
      if (result.alert) {
        setAlert(result.alert);
        setAlertType(result.alertType);
      } else if (alert) {
        // Clear alert if we moved away from a passage
        setAlert('');
      }
    }
  }, [position, setPosition, setMapLayer, setAlert, setAlertType, alert]);

  // HOOKS: useEffect
  useEffect(() => {
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

      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
  }, [updatePosition]);

  // End Player Position

  useEffect(() => {
    obstacles.current = mapLayer?.obstacles && Object.keys(mapLayer.obstacles).reduce((result, key) => {
      return result.concat(mapLayer.obstacles[key]);
    }, []);
  }, [mapLayer]);

  useEffect(() => {
     passages.current = mapLayer?.passages && Object.keys(mapLayer.passages).reduce((result, key) => {
      return result.concat(mapLayer.passages[key]);
    }, []);
  }, [mapLayer]);

  return (
    <div className="App">
      <div className="map">
        <Map {...mapLayer} />
        <Player gridArea={position} />
      </div>
      <div className="info">
        <p>{position}</p>
        <p>{mapLayer?.name && `Location: ${mapLayer.name}`}</p>
        {alert && <Alert message={alert} type={alertType} />}
      </div>
      <div className="notes"></div>
    </div>
  );
}

export default App;
