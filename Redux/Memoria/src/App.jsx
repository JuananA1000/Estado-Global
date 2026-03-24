import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarta, compararCartas, reiniciarJuego } from './redux/memoriaSlice';

import reves from './img/svg/reves.svg';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const cartas = useSelector((state) => state.memoria.cartas);
  const movimientos = useSelector((state) => state.memoria.movimientos);
  const cartasSeleccionadas = useSelector((state) => state.memoria.cartasSeleccionadas);
  const bloquearTablero = useSelector((state) => state.memoria.bloquearTablero);

  useEffect(() => {
    if (cartasSeleccionadas.length === 2) {
      const timeout = setTimeout(() => {
        dispatch(compararCartas());
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [dispatch, cartasSeleccionadas]);

  return (
    <>
      <h1>Juego de Memoria</h1>

      <button onClick={() => dispatch(reiniciarJuego())}>Reiniciar</button>

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
            {carta.girada ? (
              <img src={carta.img} alt={`Carta ${carta.id}`} width={80} />
            ) : (
              <img src={reves} alt='Reves' width={80} style={{ opacity: 0.2 }} />
            )}
          </div>
        ))}
      </div>

      <p>Movimientos: {movimientos}</p>
    </>
  );
}

export default App;
