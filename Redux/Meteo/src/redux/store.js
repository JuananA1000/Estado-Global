import { configureStore } from '@reduxjs/toolkit';
import meteoSlice from './meteoSlice';

export const store = configureStore({
  reducer: {
    location: locationSlice,
    meteo: meteoSlice,

  },
});
