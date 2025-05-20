import { useState } from 'react';

import instrumentos from './data/instrumentosData.js';

import carritoIcon from './img/carrito.svg';
import garbageIcon from './img/garbage.svg';

import { carritoStore } from './zustand/carritoStore';

import Cantidad from './components/Cantidad.jsx';

import './App.css';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [totalProductos, setTotalProductos] = useState(0);

  const { carrito, addInstrumento } = carritoStore();

  const handleAddInstrumento = (instrumento) => {
    addInstrumento(instrumento);
    setTotalProductos(totalProductos + instrumento.cantidad);
  };

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
              {carrito.items.map((item, index) => (
                <article key={index}>
                  <div>
                    <p> {item.cantidad} </p>
                    <img src={item.img} alt={item.nombre} width={50} />
                    <span>{item.nombre}</span>
                    <span>{item.precio} €</span>
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
            <img src={instrumento.img} alt={instrumento.nombre} className='item-img' />
            <p>{instrumento.nombre}</p>
            <p>{instrumento.precio} €</p>
            <button onClick={() => handleAddInstrumento(instrumento)}>Añadir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
