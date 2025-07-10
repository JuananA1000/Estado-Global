import { createSlice } from '@reduxjs/toolkit';

const climaSlice = createSlice({
  name: 'clima',
  
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

export const {  } = climaSlice.actions;
export default climaSlice.reducer;
