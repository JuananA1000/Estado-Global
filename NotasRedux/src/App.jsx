import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNota, removeNota } from './redux/notasSlice';

import './App.css';

function App() {
  const [nuevaNota, setNuevaNota] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);
  const dispatch = useDispatch();
  const notas = useSelector((state) => state.notas);

  const handleAddNota = () => {
    if (nuevaNota !== '') {
      dispatch(addNota(nuevaNota));
      setNuevaNota('');
    } else {
      alert('introduce nota');
    }
  };

  const handleSelectNota = (notaId) => {
    setNotaSeleccionada(notaId);
  };

  const handleRemoveNota = (notaId) => {
    dispatch(removeNota(notaId));
    setNotaSeleccionada(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'e' || (e.key === 'E' && notaSeleccionada !== null)) {
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
      <div className='card'>
        {notas.map((nota) => (
          <div
            key={nota.id}
            className={notaSeleccionada === nota.id ? 'nota nota-selected' : 'nota'}
            onClick={() => handleSelectNota(nota.id)}>
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div>
        <textarea value={nuevaNota} onChange={(e) => setNuevaNota(e.target.value)} />
        <button onClick={handleAddNota}>Agregar Nota</button>
      </div>
    </div>
  );
}

export default App;
