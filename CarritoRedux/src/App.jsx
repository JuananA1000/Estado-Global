import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import instrumentos from './data/instrumentosData.js';
import carritoIcon from './img/carrito.svg';
import garbageIcon from './img/garbage.svg';

import { addInstrumento, eliminarInstrumento } from './redux/carritoSlice.js';

import './App.css';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);

  console.log('Carrito: ', carrito);

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
        <div className='carrito'>
          {mostrarCarrito ? (
            <ul>
              {carrito.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt={item.nombre} width={50} />
                  <span>{item.nombre}</span>
                  <span>{item.precio} €</span>
                  <img
                    src={garbageIcon}
                    onClick={() => dispatch(eliminarInstrumento(item.nombre))}
                    alt='papelera'
                    width={25}
                  />
                </li>
              ))}
            </ul>
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
            <button onClick={() => dispatch(addInstrumento(instrumento))}>Añadir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
