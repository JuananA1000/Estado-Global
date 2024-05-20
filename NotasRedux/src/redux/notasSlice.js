import { createSlice } from '@reduxjs/toolkit';

// Función para cargar notas desde localStorage
const cargarNotas = () => {
  const notasGuardadas = localStorage.getItem('notas');
  return notasGuardadas ? JSON.parse(notasGuardadas) : [];
};

// Función para guardar notas en localStorage
const guardarNotas = (notas) => {
  localStorage.setItem('notas', JSON.stringify(notas));
};

const notasSlice = createSlice({
  name: 'notas',
  initialState: cargarNotas(),
  reducers: {
    addNota: (state, action) => {
      const newNota = {
        id: Date.now(),
        contenido: action.payload,
      };
      const newState = [...state, newNota];
      guardarNotas(newState);
      return newState;
    },
    // Otros reducers como deleteNota pueden ir aquí
  },
});

export const { addNota } = notasSlice.actions;
export default notasSlice.reducer;