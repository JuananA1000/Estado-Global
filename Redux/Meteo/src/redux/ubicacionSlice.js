import { createSlice } from '@reduxjs/toolkit';

const ubicacionSlice = createSlice({
  name: 'clima',
  initialState: {
    city: '',
    latitude: null,
    longitude: null,
  },
  reducers: {
    updateLocation: (state, action) => {
      const { city, latitude, longitude } = action.payload;
      state.city = city;
      state.latitude = latitude;
      state.longitude = longitude;
    },
  },
});

export const { updateLocation } = ubicacionSlice.actions;
export default ubicacionSlice.reducer;
