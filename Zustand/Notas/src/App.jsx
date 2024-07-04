import { useState, useEffect } from 'react';
import { notasStore } from './zustand/notasStore';

import './App.css';

function App() {
  const [notaTexto, setNotaTexto] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(false);

  const { notas, addNota, eliminarNota, editarNota } = notasStore();

  const handleAddNota = () => {
    // code
    if (notaTexto !== '') {
      const nuevaNota = { id: Date.now(), contenido: notaTexto };
      addNota(nuevaNota);
      setNotaTexto('');
    }
  };

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='corcho'>
        {notas.map((nota) => (
          <div
            onClick={() => setNotaSeleccionada(!notaSeleccionada)}
            className={notaSeleccionada ? 'nota-selected' : 'nota'}>
            <div className='pin' />
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div className='agregar-nota'>
        <textarea value={notaTexto} onChange={(e) => setNotaTexto(e.target.value)} />
        <button onClick={handleAddNota}>
          Agregar Nota
          {/* {notaSeleccionada !== null ? 'Guardar Cambios' : 'Agregar Nota'} */}
        </button>
      </div>
    </div>
  );
}

export default App;
