import { useState } from 'react';
import { tareasStore } from './zustand/tareasStore';

import check from './img/check.svg';
import garbage from './img/garbage.svg';

import './App.css';

function App() {
  const [textoNuevaTarea, setTextoNuevaTarea] = useState('');

  const { tareas, addTarea, completarTarea, eliminarTarea } = tareasStore();

  const handleAñadirTarea = () => {
    if (textoNuevaTarea !== '') {
      const nuevaTarea = { id: Date.now(), texto: textoNuevaTarea, completada: false };
      addTarea(nuevaTarea);
      setTextoNuevaTarea('');
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
                <img src={check} width={20} onClick={() => completarTarea(tarea.id)} />
                <img
                  style={{ marginLeft: '10px' }}
                  src={garbage}
                  width={20}
                  id='eliminar'
                  onClick={() => eliminarTarea(tarea.id)}
                />
              </div>
            </li>
          ))}
        </ul>

        <input
          type='text'
          value={textoNuevaTarea}
          onChange={(e) => setTextoNuevaTarea(e.target.value)}
          className='task-input'
          placeholder='Agregar nueva tarea'
        />
        <button className='add-button' onClick={handleAñadirTarea}>
          Agregar Tarea
        </button>
      </div>
    </div>
  );
}

export default App;
