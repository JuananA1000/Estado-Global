import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/climaSlice';
import { fetchLocationByName, fetchLocationByCoords } from './redux/ubicacionSlice';
import weatherData from './data/weatherData';

import './App.css';

function App() {
  const [place, setPlace] = useState('');

  const dispatch = useDispatch();
  const location = useSelector((state) => state.ubicacion);
  const weather = useSelector((state) => state.clima);

  const buscarCiudad = () => {
    // dispatch(fetchLocation(searchCity));
    // dispatch(updateLocation({ city: 'Madrid', latitude: 40.4168, longitude: -3.7038 })); // PENDIENTE: Borrar esta línea cuando se conecte a Nominatim
    dispatch(fetchLocationByName(place));
    setPlace('');
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      dispatch(fetchWeather({ latitude: location.latitude, longitude: location.longitude }));
    }
  }, [location, dispatch]);

  useEffect(() => {
    console.log('LOC object:', location);
  }, [location]);

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' value={place} onChange={(e) => setPlace(e.target.value)} placeholder='Buscar Ciudad...' />
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
