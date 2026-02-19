import { useEffect, useState } from 'react';

import { climaStore } from './zustand/climaStore';
import { ubicacionStore } from './zustand/ubicacionStore';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const { obtenerUbicacion } = ubicacionStore();
  const { clima, setDatosClima } = climaStore();

  const buscarCiudad = async () => {
    await obtenerUbicacion(ciudad);
    const { lat, lon } = ubicacionStore.getState();
    await setDatosClima(40.4167, -3.7033); // Coordenadas de Madrid

    console.log(clima);
  };

  // Coordenadas MAD: 40.4167, -3.7033

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        <button onClick={buscarCiudad}>Buscar</button>

        {clima && (
          <div className='card'>
            <h2>{clima?.nombreCiudad || 'nombreCiudad'}</h2>
            <img
              // src={weatherData.find((w) => w.weathercode.includes(data?.weathercode))?.icono}
              alt='Weather Icon'
              width={50}
            />
            <h3>{clima?.temperature || '00°C'}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
