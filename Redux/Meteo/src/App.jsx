import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/climaSlice';
import { fetchLocation } from './redux/ubicacionSlice';
import weatherData from './data/weatherData';

import './App.css';

function App() {
  const [searchCity, setsearchCity] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.ubicacion);
  const weather = useSelector((state) => state.clima);

  const buscarCiudad = () => {
    dispatch(fetchLocation(searchCity));
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      dispatch(fetchWeather({ latitude: location.latitude, longitude: location.longitude }));
    }
  }, [location, dispatch]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
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
      </div>
    </>
  );
}

export default App;
