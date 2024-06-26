import { useState } from 'react';

import check from './img/check.svg';
import garbage from './img/garbage.svg';

import './App.css';

function App() {
  const [nuevaTarea, setNuevaTarea] = useState('');

  return (
    <div className='task-list'>
      <h1>Lista de Tareas</h1>
      <div className='task-card'>
        {/* <ul className='task-items'>
          {tareas.map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? 'task-item-completed' : 'task-item'}>
              {tarea.texto}
              <div>
                <img src={check}  width={20} />
                <img
                  style={{ marginLeft: '10px' }}
                  src={garbage}
                  width={20}
                  id='eliminar'
                />
              </div>
            </li>
          ))}
        </ul> */}

        {/* PENDIENTE: Eliminar este ul */}
        <ul className='task-items'>
          <li className='task-item'>
            Tarea ejemplo
            <div>
              <img src={check} width={20} />
              <img style={{ marginLeft: '10px' }} src={garbage} width={20} id='eliminar' />
            </div>
          </li>
        </ul>
        <input
          type='text'
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className='task-input'
          placeholder='Agregar nueva tarea'
        />
        <button className='add-button'>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;
