import { createSlice } from '@reduxjs/toolkit';

const meteoSlice = createSlice({
  name: 'meteo',
  
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  reducers: {
    // 1. Actualizar ubicación
    // 2. Cargar datos del clima
  },
});

export const {  } = meteoSlice.actions;
export default meteoSlice.reducer;
