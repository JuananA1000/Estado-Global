import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarta, compararCartas, reiniciarJuego } from './redux/memoriaSlice';

import imagesData from './data/imagesData';

import './App.css';

function App() {

  const dispatch = useDispatch();

  return (
    <>
      <h1>Juego de Memoria</h1>

      <button onClick={() => console.log('reiniciar')}> 'Reiniciar' </button>

      <div className='card'>
        {imagesData.map(({ key, img, name }) => (
          <div key={key} className='tarjeta' onClick={() => dispatch(selectCarta({ key, img, name }))}>
            <img src={img} alt={name} width={80} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
