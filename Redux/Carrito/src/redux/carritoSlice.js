import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
    addInstrumento: (state, action) => {
      const instrumento = action.payload;
      const enElCarrito = state.find((i) => i.nombre === instrumento.nombre);

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
    precioTotal: (state) => {
      state.total = state.items.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0);
    }
  },
});

export const { addInstrumento, eliminarInstrumento, precioTotal } = carritoSlice.actions;
export default carritoSlice.reducer;
