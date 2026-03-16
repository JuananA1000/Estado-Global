import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCarta, compararCartas, reiniciarJuego } from './redux/memoriaSlice';

import imagesData from './data/imagesData';

import './App.css';

const imgRandom = [...imagesData, ...imagesData].sort(() => Math.random() - 0.5).map((img, i) => ({ ...img, key: i }));

function App() {
  const [girarCarta, setGirarCarta] = useState(null);

  const dispatch = useDispatch();

  const cartas = useSelector((state) => state.memoria.cartas);
  const cartasSeleccionadas = useSelector((state) => state.memoria.cartasSeleccionadas);
  const bloquearTablero = useSelector((state) => state.memoria.bloquearTablero);

  const seleccionarCarta = (carta) => {
    if (bloquearTablero) return;
    dispatch(selectCarta(carta));
    setGirarCarta(carta.id);
  };

  useEffect(() => {
    if (cartasSeleccionadas.length === 2) {
      setTimeout(() => {
        dispatch(compararCartas());
      }, 1000);
    }
  }, [cartasSeleccionadas, dispatch]);

  return (
    <>
      <h1>Juego de Memoria</h1>

      <button onClick={() => dispatch(reiniciarJuego())}> 'Reiniciar' </button>

      <div className='card'>
        {imgRandom.map(({ key, img, name }) => (
          <div key={key} className='tarjeta' onClick={() => seleccionarCarta(  { id: key, valor: name })}>
            {girarCarta === key && <img src={img} alt={name} width={80} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
