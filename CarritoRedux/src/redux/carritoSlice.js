import { createSlice } from '@reduxjs/toolkit';

import instrumentos from '../data/instrumentosData';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
    addInstrumento: (state, action) => {
      const instrumento = instrumentos.find((item) => item === action.payload);
      state.push(instrumento);
    },

    eliminarInstrumento: (state, action) => {
      return state.filter((instrumento) => instrumento.nombre !== action.payload);
    },
  },
});

export const { addInstrumento, eliminarInstrumento } = carritoSlice.actions;
export default carritoSlice.reducer;
