import { useState, useEffect, useCallback, useRef, useTransition, useDeferredValue } from 'react';
import './App.scss';
import Map from './components/Map/Map';
import Player from './components/Player/Player';
import Alert from './components/Alert/Alert';
import Log from './components/Log/Log';
import Loading from './components/Loading/Loading';
import { Maps } from './layers/maps/Maps';
import { updatePosition as updatePositionUtil } from './utils/positionUtils';
import { formatCurrentTime } from './utils/formatTime';
import { useLocalStorage } from './hooks/useLocalStorage';

// TODO: Call in these boundaries from a contants file or a separate config
const boundaries = [1,16,16,1];

/**
 * Main App component that manages game state and rendering
 * @returns {JSX.Element} The rendered game application
 */
function App() {
  // Concurrent features
  const [isPending, startTransition] = useTransition();

  // Player Position

  // HOOKS: useState
  // REACT: Lifting up state
  const [alert, setAlert] = useState('');
  const [alertType, setAlertType] = useState('info');
  const [position, setPosition] = useLocalStorage('playerPosition', '7/8');
  const [mapLayer, setMapLayer] = useLocalStorage('currentMap', Maps.greenHill);
  const [log, setLog] = useLocalStorage('gameLog', '');
  
  // Defer log updates as they're not critical
  const deferredLog = useDeferredValue(log);
  
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
      // Use transition for map changes
      if (result.mapChange) {
        startTransition(() => {
          setMapLayer(Maps[result.mapChange]);
        });
      }
      setPosition(result.position);

      // Batch alert-related state updates
      if (result.alert) {
        setAlert(result.alert);
        setAlertType(result.alertType);
        setLog(prevLog => `${prevLog}\n${formatCurrentTime()}: ${result.alert}`);
      } else if (alert) {
        setAlert('');
      }
    }
  }, [position, setPosition, setMapLayer, setAlert, setAlertType, alert, startTransition]);

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
      <Loading isLoading={isPending} />
      <div className="map">
        <Map {...mapLayer} />
        <Player gridArea={position} />
      </div>
      <div className="info">
        <p>{position}</p>
        <p>{mapLayer?.name && `Location: ${mapLayer.name}`}</p>
        {alert && <Alert message={alert} type={alertType} />}
      </div>
      <div className="notes">
        <Log log={deferredLog} />
      </div>
    </div>
  );
}

export default App;
