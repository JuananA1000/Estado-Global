import { useState, useEffect } from 'react';
import { notasStore } from './zustand/notasStore';

import './App.css';

function App() {
  const [notaTexto, setNotaTexto] = useState('');
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);

  const { notas, addNota, eliminarNota, editarNota } = notasStore();

  // const handleAddNota = () => {
  //   if (notaTexto !== '') {
  //     // addNota({ id: Date.now(), contenido: notaTexto });

  //     if (notaSeleccionada !== null) {
  //       editarNota({ id: notaSeleccionada, contenido: notaTexto });
  //       setNotaSeleccionada(null);
  //     } else {
  //       addNota(notaTexto);
  //     }

  //     setNotaTexto(''); // Vacía el cuadro de texto
  //   } else {
  //     alert('Introduce una nota');
  //   }
  // };

  const handleEliminarNota = (e) => {
    if ((e.ctrlKey && e.key === 'e') || (e.ctrlKey && e.key === 'E' && notaSeleccionada !== null)) {
      eliminarNota(notaSeleccionada.id);
      setNotaSeleccionada(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEliminarNota);
    return () => {
      window.removeEventListener('keydown', handleEliminarNota);
    };
  }, [notaSeleccionada]);

  const handleAddNota = () => {
    if (notaTexto !== '') {
      if (notaSeleccionada !== null) {
        // Editar nota existente
        editarNota(notaSeleccionada, notaTexto);
        setNotaSeleccionada(null);
      } else {
        // Agregar nueva nota
        addNota(notaTexto);
      }
      setNotaTexto('');
    } else {
      alert('Introduce una nota');
    }
  };

  const handleEditClick = (nota) => {
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
            onClick={() => setNotaSeleccionada(nota.id === notaSeleccionada?.id ? null : nota)}
            className={nota.id === notaSeleccionada?.id ? 'nota-selected' : 'nota'}>
            <div className='pin' />
            <p>{nota.contenido}</p>
          </div>
        ))}
      </div>

      <div className='agregar-nota'>
        <textarea value={notaTexto} onChange={(e) => setNotaTexto(e.target.value)} placeholder='Escribe tu nota' />
        <button onClick={handleAddNota}>{notaSeleccionada !== null ? 'Guardar Cambios' : 'Agregar Nota'}</button>
        <ul>
          {notas.map((nota) => (
            <li key={nota.id}>
              {nota.contenido} <button onClick={() => handleEditClick(nota)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
