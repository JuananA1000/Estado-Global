import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import instrumentos from './data/instrumentosData.js';

import carritoIcon from './img/carrito.svg';
import garbageIcon from './img/garbage.svg';

import Cantidad from './components/Cantidad.jsx';

import { addInstrumento, eliminarInstrumento, mostrarCantidad } from './redux/carritoSlice.js';

import './App.css';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  // const [mostrarCantidad, setMostrarCantidad] = useState(0);
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);

  return (
    <div>
      <header>
        <h1>Carrito de compras</h1>
        <img
          src={carritoIcon}
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          alt='carrito'
          width={40}
          id='carrito-icon'
        />
        {/* Burbuja de cantidad */}
        <Cantidad>0</Cantidad>
        <div>
          {mostrarCarrito ? (
            <div className='carrito'>
              {carrito.map((item, index) => (
                <article key={index}>
                  <div>
                    <img src={item.img} alt={item.nombre} width={50} />
                    <span>{item.nombre}</span>
                    <span>{item.precio} €</span>
                    <img
                      src={garbageIcon}
                      onClick={() => {
                        dispatch(eliminarInstrumento(item.nombre));
                        // setMostrarCantidad(mostrarCantidad - 1);
                      }}
                      alt='papelera'
                      width={25}
                    />
                  </div>

                  <div>
                    <b>Total:</b> 000€
                  </div>
                </article>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </header>

      <div className='card'>
        {instrumentos.map((instrumento, index) => (
          <div className='producto' key={index}>
            <img src={instrumento.img} alt={instrumento.nombre} width={150} />
            <p>{instrumento.nombre}</p>
            <p>{instrumento.precio} €</p>
            <button
              onClick={() => {
                dispatch(addInstrumento(instrumento));
                dispatch(mostrarCantidad(instrumento));
                // setMostrarCantidad(mostrarCantidad + 1);
              }}>
              Añadir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
