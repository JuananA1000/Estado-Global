import { useState, useEffect } from 'react';

import { memoriaStore } from './zustand/memoriaStore';

import reves from './img/svg/reves.svg';

import './App.css';

function App() {
  const { cartas, cartasSeleccionadas, movimientos, selectCarta, compararCartas, reiniciarJuego } = memoriaStore(
    (state) => state,
  );

  useEffect(() => {
    if (cartasSeleccionadas.length === 2) {
      compararCartas();
    }
  }, [cartasSeleccionadas.length, compararCartas]);

  return (
    <>
      <h1>Juego de Memoria</h1>

      <div className='card'>
        {cartas.map((carta) => (
          <div key={carta.uid} className='tarjeta' onClick={() => selectCarta(carta)}>
            {carta.girada ? (
              <img src={carta.img} alt={carta.valor} width={80} />
            ) : (
              <img src={reves} alt='Reves' width={80} style={{ opacity: 0.2 }} />
            )}
          </div>
        ))}
      </div>

      <div>
        <h3>Movimientos: {movimientos}</h3>
        <button onClick={reiniciarJuego}>Reiniciar</button>
      </div>
    </>
  );
}

export default App;
