import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',

  initialState: {
    items: [],

    /* 
      IDEA: hemos eliminado la funcion precioTotal. En su lugar hemos convertido el initialState en un objeto que
      refleja también el precio, el cual varía según los instrumentos dentro del carrito.
    */
    total: 0,
  },

  reducers: {
    addInstrumento: (state, action) => {
      const instrumento = action.payload;
      const enElCarrito = state.items.find((i) => i.nombre === instrumento.nombre);

      if (enElCarrito) {
        enElCarrito.cantidad += 1;
      } else {
        state.items.push({ ...instrumento, cantidad: 1 });
      }

      state.total += instrumento.precio;
    },

    eliminarInstrumento: (state, action) => {
      const instrumento = action.payload;
      const enElCarrito = state.items.find((item) => item.nombre === instrumento.nombre);

      if (enElCarrito) {
        if (enElCarrito.cantidad > 1) {
          enElCarrito.cantidad -= 1;
          state.total -= instrumento.precio;
        } else {
          state.items = state.items.filter((item) => item.nombre !== instrumento.nombre);
          state.total -= instrumento.precio;
        }
      }
    },
  },
});

export const { addInstrumento, eliminarInstrumento, precioTotal } = carritoSlice.actions;
export default carritoSlice.reducer;
