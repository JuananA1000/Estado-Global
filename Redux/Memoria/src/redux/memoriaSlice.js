import { createSlice } from '@reduxjs/toolkit';

const memoriaSlice = createSlice({
  name: 'memoria',
  initialState: {
    cartas: [
      { id: 1, valor: 'mariscada.png', emparejada: false },
      { id: 1, valor: 'mariscada.png', emparejada: false },
      { id: 2, valor: 'montaña_alien.png', emparejada: false },
      { id: 2, valor: 'montaña_alien.png', emparejada: false },
      { id: 3, valor: 'oso_panda.png', emparejada: false },
      { id: 3, valor: 'oso_panda.png', emparejada: false },
      { id: 4, valor: 'scary_movie.png', emparejada: false },
      { id: 4, valor: 'scary_movie.png', emparejada: false },
      { id: 5, valor: 'serpientes_en_el_avion.png', emparejada: false },
      { id: 5, valor: 'serpientes_en_el_avion.png', emparejada: false },
      { id: 6, valor: 'sharknado.png', emparejada: false },
      { id: 6, valor: 'sharknado.png', emparejada: false },
      { id: 7, valor: 'tambor_derretido.png', emparejada: false },
      { id: 7, valor: 'tambor_derretido.png', emparejada: false },
      { id: 8, valor: 'tortuga_ninja.png', emparejada: false },
      { id: 8, valor: 'tortuga_ninja.png', emparejada: false },
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
      if (state.cartasSeleccionadas.length !== 2) return;

      const [carta1, carta2] = state.cartasSeleccionadas;

      if (carta1.valor === carta2.valor) {
        state.cartas = state.cartas.map((carta) => {
          if (carta.id === carta1.id || carta.id === carta2.id) {
            return { ...carta, emparejada: true };
          }
          return carta;
        });
      }

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
