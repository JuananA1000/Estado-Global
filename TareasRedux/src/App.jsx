import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTarea, eliminarTarea } from './redux/tareasSlice';

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
    }
  };

  return (
    <div className='task-list'>
      <h1>Lista de Tareas</h1>
      <div className='task-card'>
        <ul className='task-items'>
          {tareas.map((tarea, index) => (
            <li key={index} className='task-item'>
              {tarea}
              <div>
                <img src={check} width={20} />
                <img
                  style={{ marginLeft: '10px' }}
                  src={garbage}
                  width={20}
                  id='eliminar'
                  onClick={() => accionarDispatch(eliminarTarea(tarea))}
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
