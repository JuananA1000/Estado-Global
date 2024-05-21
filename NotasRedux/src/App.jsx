import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNota, removeNota } from './redux/notasSlice';

import './App.css';

function App() {
  const [nuevaNota, setNuevaNota] = useState('');
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

  const handleRemoveNota = () => {
    dispatch(removeNota(selectNota));
  };

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='card'>
        {notas.map((nota) => (
          <div key={nota.id} className={selectNota ? 'nota-selected' : 'nota'} onClick={handleRemoveNota}>
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div>
        <textarea value={nuevaNota} onChange={(e) => setNuevaNota(e.target.value)} />
        <button onClick={handleAddNota}>Agregar Nota</button>
        <button onClick={handleRemoveNota}>eliminar Tarea</button>
      </div>
    </div>
  );
}

export default App;
