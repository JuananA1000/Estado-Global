import { configureStore } from '@reduxjs/toolkit';
import climaSlice from './climaSlice';
import ubicacionSlice from './ubicacionSlice';

export const store = configureStore({
  reducer: {
    ubicacion: ubicacionSlice,
    clima: climaSlice,
  },
});
