import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: [],
  reducers: {
    addProducto: (state, action) => {
      console.log('addProducto carritoSlice');
    },
  },
});

export const { addProducto } = carritoSlice.actions;
export default carritoSlice.reducer;
