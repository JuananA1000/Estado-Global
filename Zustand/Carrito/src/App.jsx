import { useState } from 'react';

import instrumentos from './data/instrumentosData.js';

import carritoIcon from './img/carrito.svg';
import garbageIcon from './img/garbage.svg';

import Cantidad from './components/Cantidad.jsx';

import './App.css';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [totalProductos, setTotalProductos] = useState(0);

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
        <Cantidad>{totalProductos}</Cantidad>
        <div>
          {mostrarCarrito ? (
            <div className='carrito'>
              <article>
                <div>
                  <p> xcantidad</p>
                  {/* <img src={item.img} alt={item.nombre} width={50} /> */}
                  <span>nombre</span>
                  <span>precio €</span>
                  <img
                    id='eliminar-producto'
                    src={garbageIcon}
                    onClick={() => {
                      setTotalProductos(totalProductos - 1);
                    }}
                    alt='papelera'
                    width={25}
                  />
                </div>
              </article>

              <div>
                <b>Total:</b> 000€
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </header>

      <div className='card'>
        {instrumentos.map((instrumento, index) => (
          <div className='producto' key={index}>
            <img src={instrumento.img} alt={instrumento.nombre} className='item-img' />
            <p>{instrumento.nombre}</p>
            <p>{instrumento.precio} €</p>
            <button
              onClick={() => {
                setTotalProductos(totalProductos + 1);
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
