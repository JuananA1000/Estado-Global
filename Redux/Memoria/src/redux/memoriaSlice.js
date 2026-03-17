import { createSlice } from '@reduxjs/toolkit';

const memoriaSlice = createSlice({
  name: 'memoria',
  initialState: {
    cartas: [
      { id: 1, valor: 'mariscada', emparejada: false },
      { id: 2, valor: 'montanalien', emparejada: false },
      { id: 3, valor: 'oso_panda', emparejada: false },
      { id: 4, valor: 'scary_movie', emparejada: false },
      { id: 5, valor: 'serp_avion', emparejada: false },
      { id: 6, valor: 'sharknado', emparejada: false },
      { id: 7, valor: 'tambor_derr', emparejada: false },
      { id: 8, valor: 'tortuga_ninja', emparejada: false },
    ],

    cartasSeleccionadas: [],
    bloquearTablero: false, // Mientras se comparan las cartas, el tablero se bloquea
    movimientos: 0,
  },
  reducers: {
    selectCarta: (state, action) => {
      const carta = action.payload;

      if (state.cartasSeleccionadas.length < 2) {
        state.cartasSeleccionadas.push(carta);
      }

      if (state.cartasSeleccionadas.length === 2) {
        state.bloquearTablero = true;
        state.movimientos += 1;
      } 
    },

    compararCartas: (state) => {
      if (state.cartasSeleccionadas.length !== 2) return; // Solo se pueden comparar si hay exactamente dos cartas seleccionadas

      const [carta1, carta2] = state.cartasSeleccionadas;

      if (carta1.valor === carta2.valor) {
        state.cartas = state.cartas.map((carta) => {
          if (carta.id === carta1.id || carta.id === carta2.id) {
            return { ...carta, emparejada: true };
          }
          return carta;
        });
      }

      // Limpiar cartas seleccionadas y desbloquear tablero después de comparar
      state.cartasSeleccionadas = [];
      state.bloquearTablero = false;
    },
    
    reiniciarJuego: (state) => {
      state.cartasSeleccionadas = [];
      state.bloquearTablero = false;
      state.movimientos = 0;
    },
  },
});

export const { selectCarta, compararCartas, reiniciarJuego } = memoriaSlice.actions;
export default memoriaSlice.reducer;
