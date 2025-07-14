import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/climaSlice';
import { updateLocation } from './redux/ubicacionSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.ubicacion);
  const weather = useSelector((state) => state.clima);

  const buscarCiudad = () => {
    dispatch(updateLocation({ city: 'Madrid', latitude: 40.4168, longitude: -3.7038 }));
  };
  console.log(weather);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      dispatch(fetchWeather({ latitude: location.latitude, longitude: location.longitude }));
    }
  }, [location, dispatch]);

  return (
    <>
      <h1>Meteo</h1>

      <input type='text' placeholder='Buscar Ciudad...' />
      <button onClick={buscarCiudad}>Buscar</button>
      <div className='card'>
        <h2>Nombre Ciudad</h2>
        <p>Condición:  Soleado</p>
        <p>Temperatura: {weather.data?.temperature}°C</p>

        {/* 
        interval: 900
​​
is_day: 1
​​
temperature: 25
​​
time: "2025-07-14T08:15"
​​
weathercode: 0
​​
winddirection: 86
​​
windspeed: 4.7
        */}
      </div>
    </>
  );
}

export default App;
