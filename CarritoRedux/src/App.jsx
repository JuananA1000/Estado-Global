import { useDispatch, useSelector } from 'react-redux';

import instrumentos from './data/instrumentosData.js';
import carritoIcon from './img/carrito.svg';

import './App.css';
import { addProducto } from './redux/carritoSlice.js';

function App() {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);

  return (
    <div>
      <header>
        <h1>Carrito de compras</h1>
        <img src={carritoIcon} alt='carrito' width={40} id='carrito' />
      </header>

      <div className='card'>
        {instrumentos.map((instrumento, index) => (
          <div className='producto' key={index}>
            <img src={instrumento.img} alt={instrumento.nombre} width={150} />
            <p>{instrumento.nombre}</p>
            <p>{instrumento.precio} €</p>
            <button onClick={() => dispatch(addProducto())}>Añadir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
