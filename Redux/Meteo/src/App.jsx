import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/climaSlice';
import { updateLocation } from './redux/ubicacionSlice';
import weatherData from './data/weatherData';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.ubicacion);
  const weather = useSelector((state) => state.clima);

  const buscarCiudad = () => {
    dispatch(updateLocation({ city: 'Madrid', latitude: 40.4168, longitude: -3.7038 }));
    // { city: 'Oslo', latitude: 59.9139, longitude: 10.7522 }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      dispatch(fetchWeather({ latitude: location.latitude, longitude: location.longitude }));
    }
  }, [location, dispatch]);

  return (
    <>
      <h1>Meteo</h1>

      <input type='text' placeholder='Buscar Ciudad...' />
      <button onClick={buscarCiudad}>Buscar</button>
      <div className='card'>
        <h2>Nombre Ciudad</h2>
        <img
          src={weatherData.find((w) => w.weathercode.includes(weather.data?.weathercode))?.icono}
          alt='Weather Icon'
          width={50}
        />
        <h3> {weather.data?.temperature}°C</h3>
      </div>
    </>
  );
}

export default App;
