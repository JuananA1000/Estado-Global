import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarta, compararCartas, reiniciarJuego } from './redux/memoriaSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const cartas = useSelector((state) => state.memoria.cartas);
  const movimientos = useSelector((state) => state.memoria.movimientos);
  const cartasSeleccionadas = useSelector((state) => state.memoria.cartasSeleccionadas);
  const bloquearTablero = useSelector((state) => state.memoria.bloquearTablero);

  useEffect(() => {
    dispatch(compararCartas());
  }, [cartasSeleccionadas, dispatch]);

  return (
    <>
      <h1>Juego de Memoria</h1>

      <button onClick={() => console.log('reiniciar')}> 'Reiniciar' </button>

      <div className='card'>
        {cartas.map((carta) => (
          <div
            key={carta.uid}
            className='tarjeta'
            onClick={() => {
              if (!bloquearTablero) {
                dispatch(selectCarta(carta));
              }
            }}>
            <img src={carta.img} alt={`Carta ${carta.id}`} width={80} />
          </div>
        ))}
      </div>

      <p>Movimientos: {movimientos}</p>
    </>
  );
}

export default App;
