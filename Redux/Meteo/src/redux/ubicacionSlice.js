import { createSlice } from '@reduxjs/toolkit';

const ubicacionSlice = createSlice({
  name: 'ubicacion',

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

export const {actualizarUbicacion, limpiarUbicacion} = ubicacionSlice.actions;
export default ubicacionSlice.reducer;
