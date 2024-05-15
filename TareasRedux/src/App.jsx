import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTarea, eliminarTarea, completarTarea } from './redux/tareasSlice';

import check from './img/check.svg';
import garbage from './img/garbage.svg';

import './App.css';

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const accionarDispatch = useDispatch();
  const tareas = useSelector((state) => state.tareas);

  const handleAddTask = () => {
    if (nuevaTarea !== '') {
      accionarDispatch(addTarea(nuevaTarea));
      setNuevaTarea('');
    } else {
      alert('Introduce tarea');
    }
  };

  return (
    <div className='task-list'>
      <h1>Lista de Tareas</h1>
      <div className='task-card'>
        <ul className='task-items'>
          {tareas.map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? 'task-item-completed' : 'task-item'}>
              {tarea.texto}
              <div>
                <img src={check} onClick={() => accionarDispatch(completarTarea(tarea.id))} width={20} />
                <img
                  style={{ marginLeft: '10px' }}
                  src={garbage}
                  width={20}
                  id='eliminar'
                  onClick={() => accionarDispatch(eliminarTarea(tarea.id))}
                />
              </div>
            </li>
          ))}
        </ul>
        <input
          type='text'
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className='task-input'
          placeholder='Agregar nueva tarea'
        />
        <button onClick={handleAddTask} className='add-button'>
          Agregar Tarea
        </button>
      </div>
    </div>
  );
}

export default App;
