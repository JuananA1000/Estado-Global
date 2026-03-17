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
    ].sort(() => Math.random() - 0.5),

    cartasSeleccionadas: [],
    bloquearTablero: false, // Mientras se comparan las cartas, el tablero se bloquea
    movimientos: 0,
  },
  
  reducers: {
    selectCarta: (state, action) => {
      const carta = action.payload;
      console.log('carta', carta);
      console.log('state', state);

      // si hay menos de 2 cartas seleccionadas, push. Que es push?

      // si hay 2 cartas seleccionadas, bloquear el tablero y aumentar movimientos
    },

    compararCartas: (state) => {
     // si hay 2 cartas seleccionadas, comparar. 
     // Si son iguales, marcar como emparejadas. 
     // Si no, desbloquear el tablero.
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
