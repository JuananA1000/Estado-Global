import { useEffect, useState } from 'react';

import { climaStore } from './zustand/climaStore';

import './App.css';

function App() {
  const [ciudad, setCiudad] = useState('');

  const { clima, setDatosClima } = climaStore();

  const buscarCiudad = () => {
    console.log('Buscar ciudad no implementado');
  };

  // useEffect(() => {
  //   setDatosClima(40.4168, -3.7038); // Coordenadas de Madrid
  // }, [setDatosClima]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' />
        <button onClick={buscarCiudad}>Buscar</button>

        <div className='card'>
          <h2>nombreCiudad</h2>
          <img
            // src={weatherData.find((w) => w.weathercode.includes(data?.weathercode))?.icono}
            alt='Weather Icon'
            width={50}
          />
          <h3>00°C</h3>
        </div>
      </div>
    </>
  );
}

export default App;
