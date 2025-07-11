import { configureStore } from '@reduxjs/toolkit';

import climaSlice from './climaSlice';

export const store = configureStore({
  reducer: {
    clima: climaSlice,
  },
});
