import instrumentos from './data/instrumentosData.js';

import './App.css';

function App() {
  return (
    <div>
      <h1>Carrito de compras</h1>
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
