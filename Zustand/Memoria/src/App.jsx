import { useState, useEffect } from 'react';

import { memoriaStore } from './zustand/memoriaStore';

import reves from './img/svg/reves.svg';

import './App.css';

function App() {
  const { cartas, selectCarta, compararCartas, reiniciarJuego } = memoriaStore();

  // useEffect(() => {
  //   if (cartas.cartasSeleccionadas.length === 2) {
  //     const timeout = setTimeout(() => {
  //       compararCartas();
  //     }, 1000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [cartas.cartasSeleccionadas, compararCartas]);


  return (
    <>
      <h1>Juego de Memoria</h1>

      <div className='card'>
        {cartas.items.map((carta) => (
          <div key={carta.uid} className='tarjeta' onClick={() => selectCarta(carta)}>
            {<img src={carta.img} alt={carta.valor} width={80} />}
          </div>
        ))}
      </div>

      <div>
        <h3>Movimientos: 00</h3>
        <button>Reiniciar</button>
      </div>
    </>
  );
}

export default App;
