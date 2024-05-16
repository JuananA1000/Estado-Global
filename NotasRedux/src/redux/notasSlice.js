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
  },
});

export const { addNota } = notasSlice.actions;
export default notasSlice.reducer;
