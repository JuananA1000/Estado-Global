import { configureStore } from '@reduxjs/toolkit';

import memoriaSlice from './memoriaSlice';

export const store = configureStore({
  reducer: {
    memoria: memoriaSlice,
  },
});
