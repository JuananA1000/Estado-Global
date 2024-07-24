import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNota, removeNota, editNota } from './redux/notasSlice';

import './App.css';

function App() {
  const [notaTexto, setNotaTexto] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);
  const dispatch = useDispatch();
  const notas = useSelector((state) => state.notas);

  const handleAddOrEditNota = () => {
    if (notaTexto !== '') {
      if (notaSeleccionada !== null) {
        // Editar nota existente
        dispatch(editNota({ id: notaSeleccionada, contenido: notaTexto }));
        setNotaSeleccionada(null);
      } else {
        // Agregar nueva nota
        dispatch(addNota(notaTexto));
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

  const handleRemoveNota = (notaId) => {
    dispatch(removeNota(notaId));
    setNotaSeleccionada(null);
    setNotaTexto('');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === 'e') || (e.ctrlKey && e.key === 'E' && notaSeleccionada !== null)) {
        handleRemoveNota(notaSeleccionada);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [notaSeleccionada]);

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='corcho'>
        {notas.map((nota) => (
          <div
            key={nota.id}
            className={notaSeleccionada === nota.id ? 'nota nota-selected' : 'nota'}
            onClick={() => handleSelectNota(nota)}>
            <div className='pin'></div>
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div className='agregar-nota'>
        <textarea value={notaTexto} onChange={(e) => setNotaTexto(e.target.value)} />
        <button onClick={handleAddOrEditNota}>{notaSeleccionada !== null ? 'Guardar Cambios' : 'Agregar Nota'}</button>
      </div>
    </div>
  );
}

export default App;
