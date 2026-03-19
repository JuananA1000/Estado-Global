import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarta, compararCartas, reiniciarJuego } from './redux/memoriaSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const cartas = useSelector((state) => state.memoria.cartas);

  return (
    <>
      <h1>Juego de Memoria</h1>

      <button onClick={() => console.log('reiniciar')}> 'Reiniciar' </button>

      <div className='card'>
        {cartas.map((carta) => (
          <div key={carta.id} className='tarjeta' onClick={() => dispatch(selectCarta(carta))}>
            <img src={carta.img} alt={`Carta ${carta.id}`} width={80} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
