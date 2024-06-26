import { configureStore } from '@reduxjs/toolkit';

import notasSlice from './notasSlice'

export const store = configureStore({
  reducer: {
    notas: notasSlice,
  },
});
