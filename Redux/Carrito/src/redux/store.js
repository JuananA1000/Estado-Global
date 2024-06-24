import { configureStore } from "@reduxjs/toolkit";

import carritoSlice from './carritoSlice'

export const store=configureStore({
  reducer:{
    carrito: carritoSlice
  }
})