import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarta, compararCartas, reiniciarJuego } from './redux/memoriaSlice';

import imagesData from './data/imagesData';

import './App.css';

function App() {
  return (
    <>
      <h1>Juego de Memoria</h1>

      <button onClick={() => dispatch(reiniciarJuego())}> 'Reiniciar' </button>

      <div className='card'>
        {imagesData.map(({ key, img, name }) => (
          <div key={key} className='tarjeta' onClick={() => console.log('Carta seleccionada:', name)}>
            <img src={img} alt={name} width={80} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
