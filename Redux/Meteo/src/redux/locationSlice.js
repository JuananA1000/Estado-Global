import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',

  initialState: {
    latitud: null,
    longitud: null,
  },

  reducers: {
    actualizarUbicacion: (state, action) => {
      state.latitud = action.payload.latitud;
      state.longitud = action.payload.longitud;
    },

    limpiarUbicacion: (state) => {
      state.latitud = null;
      state.longitud = null;
    },
  },
});

export const {actualizarUbicacion, limpiarUbicacion} = locationSlice.actions;
export default locationSlice.reducer;
