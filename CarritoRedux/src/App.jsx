import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import instrumentos from './data/instrumentosData.js';

import carritoIcon from './img/carrito.svg';
import garbageIcon from './img/garbage.svg';

import Cantidad from './components/Cantidad.jsx';

import { addInstrumento, eliminarInstrumento, precioTotal } from './redux/carritoSlice.js';

import './App.css';

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [totalProductos, setTotalProductos] = useState(0);

  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);

  const handleTotal = (total) => {
    dispatch(precioTotal(total));
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
              {carrito.map((item, index) => (
                <article key={index}>
                  <div>
                    <p> x{item.cantidad}</p>
                    <img src={item.img} alt={item.nombre} width={50} />
                    <span>{item.nombre}</span>
                    <span>{item.precio} €</span>
                    <img
                      id='eliminar-producto'
                      src={garbageIcon}
                      onClick={() => {
                        dispatch(eliminarInstrumento(item));
                        setTotalProductos(totalProductos - 1);
                      }}
                      alt='papelera'
                      width={25}
                    />
                  </div>
                </article>
              ))}
              <div>
                <b>Total:</b>
                {handleTotal(total)} 000€
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
                dispatch(addInstrumento(instrumento));
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
