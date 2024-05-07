import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTarea } from './redux/tareasSlice';

import './App.css';

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const accionarDispatch = useDispatch();
  const tareas = useSelector((state) => state.tareas);

  const handleAddTask = () => {
    accionarDispatch(addTarea(nuevaTarea));
    setNuevaTarea('');
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className='card'>
        <ul>
          {tareas.map((task, index) => (
            <h4 key={index}>{task}</h4>
          ))}
        </ul>
        <input type='text' value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;
