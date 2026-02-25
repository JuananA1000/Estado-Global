import { useEffect, useState } from 'react';

import ubicacionStore from './zustand/ubicacionStore';
import climaStore from './zustand/climaStore';

import weatherData from './data/weatherData';

import Tooltip from './components/Tooltip';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const { data: ubicacion, status, error, fetchUbicacion } = ubicacionStore();
  const { data: clima, fetchWeather } = climaStore();

  const buscarCiudad = () => {
    fetchUbicacion(ciudad);
    setCiudad('');
  };

  useEffect(() => {
    if (ubicacion) {
      fetchWeather({ latitude: ubicacion.lat, longitude: ubicacion.lon });
    }
  }, [ubicacion]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        <button onClick={buscarCiudad}>Buscar</button>

        {status === 'loading' && <p>Cargando ubicación...</p>}
        {status === 'failed' && <p>Error al cargar ubicación: {error}</p>}
        {clima?.temperature && (
          <div className='card'>
            <h2> {ubicacion?.name || 'Ciudad no encontrada'}</h2>

            <Tooltip
              text={weatherData.find((w) => w.weathercode.includes(clima?.weathercode))?.descripcion}
              position='right'>
              <img
                src={weatherData.find((w) => w.weathercode.includes(clima?.weathercode))?.icono}
                alt='Weather Icon'
                width={50}
              />
            </Tooltip>
            <h3> {clima?.temperature} °C</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
