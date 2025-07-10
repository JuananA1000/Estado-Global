import useFetch from './hooks/useFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarUbicacion } from './redux/ubicacionSlice.js';
import { fetchClima } from './redux/climaSlice.js';

import wind from './assets/wind.png';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.clima.data);
  const status = useSelector((state) => state.clima.status);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = { latitude: position.coords.latitude, longitude: position.coords.longitude };

      dispatch(actualizarUbicacion(coords));
      dispatch(fetchClima(coords));
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Meteo</h1>

      <div className='container'>
        <div>
          <div className='search-container'>
            <input type='text' placeholder='Buscar ciudad...' className='search-input' />
            <button onClick={() => console.log('Buscar ciudad')} className='search-button'>
              Buscar
            </button>
          </div>

          <img src={wind} alt='Weather Icon' width={100} />

          <h2>El tiempo en nombreCiudad</h2>
          <p>Temperatura: {weatherData?.temperature}°C</p>
          <p>Velocidad del Viento: {weatherData?.windspeed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default App;
