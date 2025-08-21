import { useEffect, useState } from 'react';
import climaStore from './zustand/climaStore';
import ubicacionStore from './zustand/ubicacionStore';

import weatherData from './data/weatherData';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const { fetchClima, data: climaData, loading, error } = climaStore();
  const { fetchUbicacion, ubicacion } = ubicacionStore();

  const buscarCiudad = () => {
    // const latitude = 40.4168;
    // const longitude = -3.7038;
    // fetchClima(latitude, longitude);
    fetchUbicacion(ciudad);
    setCiudad('');
  };

  useEffect(() => {
    if (climaData) {
      console.log('Clima actualizado:', climaData);
    }
  }, [climaData]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' />
        <button onClick={buscarCiudad}>Buscar</button>

        {loading && <p>Cargando clima...</p>}
        {error && <p>Error al cargar clima: {error}</p>}
        {climaData && (
          <div className='card'>
            <h2>nombreCiudad</h2>
            <img
              src={weatherData.find((w) => w.weathercode.includes(data?.weathercode))?.icono}
              alt='Weather Icon'
              width={50}
            />
            <h3>{data.temperature}°C</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
