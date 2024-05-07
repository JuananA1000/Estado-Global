import { configureStore } from '@reduxjs/toolkit';

import tareasSlice from './tareasSlice';

export const store = configureStore({
  reducer: {
    tareas: tareasSlice,
  },
});
