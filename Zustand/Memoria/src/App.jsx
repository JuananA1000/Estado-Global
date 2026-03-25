import { useState } from 'react';

import reves from './img/svg/reves.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Juego de Memoria</h1>

      <div className='card'>
        <div className='tarjeta'>
          <img src={reves} alt='Reves' width={80} style={{ opacity: 0.2 }} />
        </div>
      </div>

      <div>
        <h3></h3>
        <button>Reiniciar</button>
      </div>
    </>
  );
}

export default App;
