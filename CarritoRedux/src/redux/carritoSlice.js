import { createSlice } from '@reduxjs/toolkit';

import instrumentos from '../data/instrumentosData';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
    // addInstrumento: (state, action) => {
    //   const instrumento = instrumentos.find((instrumento) => instrumento === action.payload);
    //   state.push(instrumento);
    // },

    addInstrumento: (state, action) => {
      const instrumento = action.payload;
      const enElCarrito = state.find((item) => item.nombre === instrumento.nombre);

      if (enElCarrito) {
        enElCarrito.cantidad += 1;
      } else {
        state.push({ ...instrumento, cantidad: 1 });
      }
    },

    eliminarInstrumento: (state, action) => {
      return state.filter((instrumento) => instrumento.nombre !== action.payload);
    },
  },
});

export const { addInstrumento, eliminarInstrumento, mostrarCantidad } = carritoSlice.actions;
export default carritoSlice.reducer;
