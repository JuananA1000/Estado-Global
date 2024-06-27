import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [notaTexto, setNotaTexto] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(false);

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='corcho'>
        <div
          onClick={() => setNotaSeleccionada(!notaSeleccionada)}
          className={notaSeleccionada ? 'nota-selected' : 'nota'}>
          <div className='pin' />
          <p>Nota ejemplo</p>
        </div>
      </div>

      <div className='agregar-nota'>
        <textarea value={notaTexto} onChange={(e) => setNotaTexto(e.target.value)} />
        <button>
          Agregar Nota
          {/* {notaSeleccionada !== null ? 'Guardar Cambios' : 'Agregar Nota'} */}
        </button>
      </div>
    </div>
  );
}

export default App;
