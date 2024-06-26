import { createSlice } from '@reduxjs/toolkit';

// const cargarNotas = () => {
//   const notasGuardadas = localStorage.getItem('notas');
//   return notasGuardadas ? JSON.parse(notasGuardadas) : [];
// };

// const guardarNotas = (notas) => {
//   localStorage.setItem('notas', JSON.stringify(notas));
// };

const notasSlice = createSlice({
  name: 'notas',
  initialState: [],
  reducers: {
    addNota: (state, action) => {
      const nuevaNota = {
        id: Date.now(),
        contenido: action.payload,
      };
      // const newState = [...state, newNota];
      // guardarNotas(newState);
      // return newState;
      state.push(nuevaNota);
    },

    removeNota: (state, action) => {
      // const notasDOM = state.filter((nota) => nota.id !== action.payload);
      // localStorage.setItem('notas', JSON.stringify(notasDOM));
      // return notasDOM;
      console.log(state);
      return state.filter((nota) => nota.id !== action.payload);
    },

    editNota: (state, action) => {
      const { id, contenido } = action.payload;
      const nota = state.find((nota) => nota.id === id);
      if (nota) {
        nota.contenido = contenido;
      }
    },
  },
});

export const { addNota, removeNota, editNota } = notasSlice.actions;
export default notasSlice.reducer;
