import { useState, useEffect } from 'react';
import { notasStore } from './zustand/notasStore';

import './App.css';

function App() {
  const [notaTexto, setNotaTexto] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);

  const { notas, addNota, eliminarNota, editarNota } = notasStore();

  useEffect(() => {
    const handleEliminarNota = (e) => {
      if ((e.ctrlKey && e.key === 'e') || (e.ctrlKey && e.key === 'E' && notaSeleccionada !== null)) {
        eliminarNota(notaSeleccionada.id);
        setNotaSeleccionada(null);
      }
    };

    window.addEventListener('keydown', handleEliminarNota);
    return () => {
      window.removeEventListener('keydown', handleEliminarNota);
    };
  }, [notaSeleccionada]);

  const handleAddNota = () => {
    if (notaTexto !== '') {
      if (notaSeleccionada !== null) {
        editarNota(notaSeleccionada, notaTexto);
        setNotaSeleccionada(null);
      } else {
        addNota(notaTexto);
      }
      setNotaTexto('');
    } else {
      alert('Introduce una nota');
    }
  };

  const handleSelectNota = (nota) => {
    setNotaSeleccionada(nota.id);
    setNotaTexto(nota.contenido);
  };

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='corcho'>
        {notas.map((nota) => (
          <div
            key={nota.id}
            onClick={() => handleSelectNota(nota)}
            className={notaSeleccionada === nota.id ? 'nota-selected' : 'nota'}>
            <div className='pin' />
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div className='agregar-nota'>
        <textarea value={notaTexto} onChange={(e) => setNotaTexto(e.target.value)} placeholder='Escribe tu nota' />
        <button onClick={handleAddNota}>{notaSeleccionada !== null ? 'Guardar Cambios' : 'Agregar Nota'}</button>
      </div>
    </div>
  );
}

export default App;
