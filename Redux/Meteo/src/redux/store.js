import { configureStore } from '@reduxjs/toolkit';
import meteoSlice from './meteoSlice';
import locationSlice from './locationSlice';

export const store = configureStore({
  reducer: {
    location: locationSlice,
    meteo: meteoSlice,
  },
});
