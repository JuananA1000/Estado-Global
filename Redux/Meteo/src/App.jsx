import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/climaSlice';
import { fetchUbicacion } from './redux/ubicacionSlice';

import weatherData from './data/weatherData';

import Tooltip from './components/Tooltip';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const dispatch = useDispatch();

  const ubicacion = useSelector((state) => state.ubicacion);
  const clima = useSelector((state) => state.clima);

  const buscarCiudad = () => {
    dispatch(fetchUbicacion(ciudad));
    setCiudad('');
  };

  useEffect(() => {
    if (ubicacion.data) {
      dispatch(fetchWeather({ latitude: ubicacion.data.lat, longitude: ubicacion.data.lon }));
    }
  }, [ubicacion, dispatch]);

  useEffect(() => {
    console.log('LOC object:', ubicacion);
  }, [ubicacion]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder='Buscar Ciudad...' />
        <button onClick={buscarCiudad}>Buscar</button>

        {ubicacion.status === 'loading' && <p>Cargando ubicación...</p>}
        {ubicacion.status === 'failed' && <p>Error al cargar ubicación: {ubicacion.error}</p>}
        {clima.status === 'loading' && <p>Cargando clima...</p>}
        {clima.status === 'failed' && <p>Error al cargar clima: {clima.error}</p>}
        {ubicacion.status === 'succeeded' && clima.status === 'succeeded' && (
          <div className='card'>
            <h2>{ubicacion.data?.name}</h2>

            <Tooltip
              text={weatherData.find((w) => w.weathercode.includes(clima.data?.weathercode))?.descripcion}
              position='right'>
              <img
                src={weatherData.find((w) => w.weathercode.includes(clima.data?.weathercode))?.icono}
                alt='Weather Icon'
                width={50}
              />
            </Tooltip>
            <h3>{clima.data?.temperature}°C</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
