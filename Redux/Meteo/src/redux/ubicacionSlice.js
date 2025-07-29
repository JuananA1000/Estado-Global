import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUbicacion = createAsyncThunk('location/fetchByName', async (nomCiudad) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nomCiudad)}`
  );
  const data = await response.json();
  return data[0];
});

const ubicacionSlice = createSlice({
  name: 'ubicacion',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },

  reducers: {},

  // Los reducers se encargan de manejar las acciones asíncronas que se definen con createAsyncThunk.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUbicacion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUbicacion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUbicacion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ubicacionSlice.reducer;
