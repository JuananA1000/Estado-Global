import { useState, useEffect } from 'react';
import { notasStore } from './zustand/notasStore';

import './App.css';

function App() {
  const [notaTexto, setNotaTexto] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);

  const { notas, addNota, eliminarNota, editarNota } = notasStore();

  const handleAddNota = () => {
    if (notaTexto !== '') {
      addNota({ id: Date.now(), contenido: notaTexto });
      setNotaTexto('');
    } else {
      alert('Introduce una nota');
    }
  };

  const handleEliminarNota = (e) => {
    if (e.key === 'E' && notaSeleccionada !== null) {
      eliminarNota(notaSeleccionada.id);
      setNotaSeleccionada(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEliminarNota);
    return () => {
      window.removeEventListener('keydown', handleEliminarNota);
    };
  }, [notaSeleccionada]);

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='corcho'>
        {notas.map((nota) => (
          <div
            key={nota.id}
            onClick={() => setNotaSeleccionada(nota.id === notaSeleccionada?.id ? null : nota)}
            className={nota.id === notaSeleccionada?.id ? 'nota-selected' : 'nota'}>
            <div className='pin' />
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div className='agregar-nota'>
        <textarea value={notaTexto} onChange={(e) => setNotaTexto(e.target.value)} />
        <button onClick={handleAddNota}>
          {/* Agregar Nota */}
          {notaSeleccionada !== null ? 'Guardar Cambios' : 'Agregar Nota'}
        </button>
      </div>
    </div>
  );
}

export default App;
