import { useEffect, useState } from 'react';

import ubicacionStore from './zustand/ubicacionStore';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const { data, status, error, fetchUbicacion } = ubicacionStore();

  const buscarCiudad = () => {
    fetchUbicacion(ciudad);
    setCiudad('');
  };

  useEffect(() => {
    console.log('Ciudad:', data);
  }, [data]);

  // Coordenadas MAD: 40.4167, -3.7033

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        <button onClick={buscarCiudad}>Buscar</button>

        <div className='card'>
          <h2> {data?.name || 'Ciudad no encontrada'}</h2>
          <img
            // src={weatherData.find((w) => w.weathercode.includes(clima?.weathercode))?.icono}
            alt='Weather Icon'
            width={50}
          />
          <h3> '00°C'</h3>
        </div>
      </div>
    </>
  );
}

export default App;
