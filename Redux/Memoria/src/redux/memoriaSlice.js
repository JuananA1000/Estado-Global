import { createSlice } from '@reduxjs/toolkit';

const memoriaSlice = createSlice({
  name: 'memoria',
  initialState: [],
  reducers: {
    selectCarta: (state, action) => {},
    compararCartas: (state, action) => {},
    reiniciarJuego: (state, action) => {},
  },
});

export const { selectCarta, compararCartas, reiniciarJuego } = memoriaSlice.actions;
export default memoriaSlice.reducer;
