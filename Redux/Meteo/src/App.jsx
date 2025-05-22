import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

import './App.css';

function App() {
  const { data, loading, error } = useFetch(
    'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&hourly=temperature_2m&current_weather=true'
  );

  console.log(data);

  return (
    <div>
      <h1>Meteo</h1>
    </div>
  );
}

export default App;
