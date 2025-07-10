import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Utilizamos createAsyncThunk de Redux Toolkit para  acciones asíncronas
export const fetchClima = createAsyncThunk('clima/fetchClima', async ({ latitud, longitud }) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`
  );
  return response.data.current_weather;
});

const climaSlice = createSlice({
  name: 'clima',

  initialState: {
    data: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  },

  reducers: {},

  // extraReducers se usa cuando reaccionamos a acciones externas al slice, como las que genera createAsyncThunk.
  extraReducers: (builder) => {
    builder
      .addCase(fetchClima.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClima.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchClima.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default climaSlice.reducer;
