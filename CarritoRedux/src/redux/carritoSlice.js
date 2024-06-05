import { createSlice } from '@reduxjs/toolkit';

import instrumentos from '../data/instrumentosData';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
    addInstrumento: (state, action) => {
      const instrumento = instrumentos.find((instrumento) => instrumento === action.payload);
      state.push(instrumento);
    },

    eliminarInstrumento: (state, action) => {
      return state.filter((instrumento) => instrumento.nombre !== action.payload);
    },

    mostrarCantidad: (state, action) => {
      /*
        PENDIENTE: sirva esta función para actualizar la cantidad de artículos que se repitan.
      */

      const conteoDeInstrumentos = {};
      state.forEach((instrumentos) => {
        if (conteoDeInstrumentos[instrumentos]) {
          conteoDeInstrumentos[instrumentos]++;
        } else {
          conteoDeInstrumentos[instrumentos] = 1;
        }
      });

      console.log('Mostrar conteoDeInstrumentos: ', conteoDeInstrumentos);
    },
  },
});

export const { addInstrumento, eliminarInstrumento, mostrarCantidad } = carritoSlice.actions;
export default carritoSlice.reducer;
