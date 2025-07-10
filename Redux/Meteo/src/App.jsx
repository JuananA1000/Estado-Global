import useFetch from './hooks/useFetch';

import { actualizarUbicacion, limpiarUbicacion } from './redux/ubicacionSlice.js';

import wind from './assets/wind.png';

import './App.css';

function App() {
  const { data, loading, error } = useFetch(
    'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&hourly=temperature_2m&current_weather=true'
  );

  console.log(data);

  return (
    <div>
      <h1>Meteo</h1>

      <div className='container'>
        {loading && <p>Cargando...</p>}
        {error && <p>Error al obtener los datos</p>}
        {data && (
          <div>
            <div className='search-container'>
              <input type='text' placeholder='Buscar ciudad...' className='search-input' />
              <button onClick={() => console.log('Buscar ciudad')} className='search-button'>
                Buscar
              </button>
            </div>

            <img src={wind} alt='Weather Icon' width={100} />

            <h2>El tiempo en nombreCiudad</h2>
            <p>Temperatura: {data.current_weather.temperature}°C</p>
            <p>Velocidad del Viento: {data.current_weather.windspeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
