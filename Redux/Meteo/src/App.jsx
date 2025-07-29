import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/climaSlice';
import { fetchUbicacion } from './redux/ubicacionSlice';
import weatherData from './data/weatherData';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.ubicacion);
  const weather = useSelector((state) => state.clima);

  const buscarCiudad = () => {
    dispatch(fetchUbicacion(ciudad));
    setCiudad('');
  };

  useEffect(() => {
    if (location.data) {
      dispatch(fetchWeather({ latitude: location.data.lat, longitude: location.data.lon }));
    }
  }, [location, dispatch]);

  useEffect(() => {
    console.log('LOC object:', location);
  }, [location]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder='Buscar Ciudad...' />
        <button onClick={buscarCiudad}>Buscar</button>
        <div className='card'>
          <h2>{location.data?.display_name || 'Nombre Ciudad'}</h2>
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
