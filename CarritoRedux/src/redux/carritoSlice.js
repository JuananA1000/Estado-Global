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

    precioTotal: (state, action) => {
      const instrumento = action.payload;
      const enElCarrito = state.find((item) => item.nombre === instrumento.nombre);
      let total = 0;

      if (enElCarrito) {
        total += enElCarrito.precio;
        console.log('precioTotal: ', total);
      }
    },
  },
});

export const { addInstrumento, eliminarInstrumento,precioTotal } = carritoSlice.actions;
export default carritoSlice.reducer;
