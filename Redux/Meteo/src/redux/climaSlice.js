import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk('clima/fetchWeather', async ({ latitude, longitude }) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json();

  return data.current_weather;
});

const climaSlice = createSlice({
  name: 'clima',

  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },

  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default climaSlice.reducer;
