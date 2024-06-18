import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
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
      const instrumento = action.payload;
      const enElCarrito = state.find((item) => item.nombre === instrumento.nombre);

      if (enElCarrito) {
        if (enElCarrito.cantidad > 1) {
          enElCarrito.cantidad -= 1;
        } else {
          return state.filter((item) => item.nombre !== instrumento.nombre);
        }
      }
    },
  },
});

export const { addInstrumento, eliminarInstrumento } = carritoSlice.actions;
export default carritoSlice.reducer;
