import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔍 Buscar coordenadas por nombre
export const fetchLocationByName = createAsyncThunk(
  'location/fetchByName',
  async (placeName) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(placeName)}`, {
      headers: {
        'User-Agent': 'my-location-app/1.0 (example@email.com)',
        'Accept-Language': 'es',
      },
    });
    const data = await response.json();
    return data[0]; // Solo retornamos el primer resultado
  }
);

// 📍 Buscar dirección por coordenadas
export const fetchLocationByCoords = createAsyncThunk(
  'location/fetchByCoords',
  async ({ lat, lon }) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, {
      headers: {
        'User-Agent': 'my-location-app/1.0 (example@email.com)',
      },
    });
    const data = await response.json();
    return data;
  }
);

const ubicacionSlice = createSlice({
  name: 'ubicacion',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchLocationByName
      .addCase(fetchLocationByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocationByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLocationByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // fetchLocationByCoords
      .addCase(fetchLocationByCoords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocationByCoords.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLocationByCoords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ubicacionSlice.reducer;
