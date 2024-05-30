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
  },
});

export const { addInstrumento } = carritoSlice.actions;
export default carritoSlice.reducer;
