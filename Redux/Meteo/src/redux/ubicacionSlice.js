import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useOptimistic } from 'react';

export const fetchLocation = createAsyncThunk('ubicacion/fetchLocation', async (city) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityInput)}`
  );
  const data = await response.json();

  return data.display_name;
});

const ubicacionSlice = createSlice({
  name: 'ubicacion',
  initialState: {
    city: '',
    latitude: null,
    longitude: null,
  },

  reducers: {
    // PENDIENTE: Borrar este reducer cuando nos conectemos a nominatim
    updateLocation: (state, action) => {
      state.city = action.payload.city;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.city = action.payload.city;
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ubicacionSlice.reducer;
export const { updateLocation } = ubicacionSlice.actions;
