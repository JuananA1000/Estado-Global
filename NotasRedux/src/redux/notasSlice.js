import { createSlice } from '@reduxjs/toolkit';

const notasSlice = createSlice({
  name: 'notas',
  initialState: [],

  reducers: {
    addNota: (state, action) => {
      const nuevaNota = {
        id: Date.now(),
        contenido: action.payload,
      };
      state.push(nuevaNota);
    },

    eliminarNota: (state, action) => {
      return state.filter((nota) => nota.id !== action.payload);
    },
  },
});

export const { addNota, eliminarNota } = notasSlice.actions;
export default notasSlice.reducer;
