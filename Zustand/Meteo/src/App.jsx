import { useEffect } from 'react';
import climaStore from './zustand/climaStore';

import weatherData from './data/weatherData';

import './App.css';

function App() {
  const { fetchClima, data, loading, error } = climaStore();

  const buscarCiudad = () => {
    const latitude = 40.4168;
    const longitude = -3.7038;
    fetchClima(latitude, longitude);
  };

  useEffect(() => {
    if (data) {
      console.log('Clima actualizado:', data);
    }
  }, [data]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' />
        <button onClick={buscarCiudad}>Buscar</button>

        {loading && <p>Cargando clima...</p>}
        {error && <p>Error al cargar clima: {error}</p>}
        {data && (
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
