import instrumentos from './data/instrumentosData.js';

import Carrito from './img/carrito.svg';

import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Carrito de compras</h1>
        <img src={Carrito} alt='carrito' width={40} id='carrito' />
      </header>

      <div className='card'>
        {instrumentos.map((instrumento, index) => (
          <div className='producto' key={index}>
            <img src={instrumento.img} alt={instrumento.nombre} width={150} />
            <p>{instrumento.nombre}</p>
            <p>{instrumento.precio} €</p>
            <button>Añadir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
