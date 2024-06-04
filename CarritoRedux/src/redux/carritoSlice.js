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

    mostrarCantidad: (state, action) => {
      /*
        PENDIENTE: sirva esta función para actualizar la cantidad total de artículos en el carrito y la de los que se
        repitan.
      */
      const cantidad = state.length;

      const conteoDeInstrumentos = {};
      state.forEach((instrumentos) => {
        if (conteoDeInstrumentos[instrumentos]) {
          conteoDeInstrumentos[instrumentos]++;
        } else {
          conteoDeInstrumentos[instrumentos] = 1;
        }
      });

      console.log('Mostrar cantidad: ', cantidad);
      console.log('Mostrar conteoDeInstrumentos: ', conteoDeInstrumentos);
    },
  },
});

export const { addInstrumento, eliminarInstrumento, mostrarCantidad } = carritoSlice.actions;
export default carritoSlice.reducer;
