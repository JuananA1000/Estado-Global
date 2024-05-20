import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNota, eliminarNota } from './redux/notasSlice';

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

  return (
    <div>
      <h1>Gestor de Notas</h1>
      <div className='card'>
        {notas.map((nota) => (
          <div key={nota.id} className='nota' onClick={() => console.log('eliminar')}>
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div>
        <textarea value={nuevaNota} onChange={(e) => setNuevaNota(e.target.value)} />
        <button onClick={handleAddNota}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;
