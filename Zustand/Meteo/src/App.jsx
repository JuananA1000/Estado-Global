import sun from './assets/0,1.png';

import { useEffect } from 'react';
import climaStore from './zustand/climaStore';

import './App.css';

function App() {
  

  return (
    <>
      <h1>Meteo</h1>

      <div className='container'>
        <input type='text' placeholder='Buscar Ciudad...' />
        <button>Buscar</button>

        <div className='card'>
          <h2>nombreCiudad</h2>
          <img src={sun} alt='Weather Icon' width={50} />

          <h3>00°C</h3>
        </div>
      </div>
    </>
  );
}

export default App;
