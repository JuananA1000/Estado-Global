import { createSlice } from '@reduxjs/toolkit';

import mariscada from '../img/images/mariscada.png';
import montaña_alien from '../img/images/montaña_alien.png';
import oso_panda from '../img/images/oso_panda.png';
import scary_movie from '../img/images/scary_movie.png';
import serpientes_en_el_avion from '../img/images/serpientes_en_el_avion.png';
import sharknado from '../img/images/sharknado.png';
import tambor_derretido from '../img/images/tambor_derretido.png';
import tortuga_ninja from '../img/images/tortuga_ninja.png';

const memoriaSlice = createSlice({
  name: 'memoria',
  initialState: {
    cartas: [
      { id: 1, uid: 1, valor: 'mariscada.png', img: mariscada, girada: false, emparejada: false },
      { id: 1, uid: 2, valor: 'mariscada.png', img: mariscada, girada: false, emparejada: false },
      { id: 2, uid: 3, valor: 'montaña_alien.png', img: montaña_alien, girada: false, emparejada: false },
      { id: 2, uid: 4, valor: 'montaña_alien.png', img: montaña_alien, girada: false, emparejada: false },
      { id: 3, uid: 5, valor: 'oso_panda.png', img: oso_panda, girada: false, emparejada: false },
      { id: 3, uid: 6, valor: 'oso_panda.png', img: oso_panda, girada: false, emparejada: false },
      { id: 4, uid: 7, valor: 'scary_movie.png', img: scary_movie, girada: false, emparejada: false },
      { id: 4, uid: 8, valor: 'scary_movie.png', img: scary_movie, girada: false, emparejada: false },
      { id: 5, uid: 9, valor: 'serpientes_avion.png', img: serpientes_en_el_avion, girada: false, emparejada: false },
      { id: 5, uid: 10, valor: 'serpientes_avion.png', img: serpientes_en_el_avion, girada: false, emparejada: false },
      { id: 6, uid: 11, valor: 'sharknado.png', img: sharknado, girada: false, emparejada: false },
      { id: 6, uid: 12, valor: 'sharknado.png', img: sharknado, girada: false, emparejada: false },
      { id: 7, uid: 13, valor: 'tambor_derretido.png', img: tambor_derretido, girada: false, emparejada: false },
      { id: 7, uid: 14, valor: 'tambor_derretido.png', img: tambor_derretido, girada: false, emparejada: false },
      { id: 8, uid: 15, valor: 'tortuga_ninja.png', img: tortuga_ninja, girada: false, emparejada: false },
      { id: 8, uid: 16, valor: 'tortuga_ninja.png', img: tortuga_ninja, girada: false, emparejada: false },
    ].sort(() => Math.random() - 0.5),

    cartasSeleccionadas: [],
    bloquearTablero: false,
    movimientos: 0,
  },

  reducers: {
    selectCarta: (state, action) => {
      const cartaSeleccionada = action.payload;
      const cartaIndex = state.cartas.findIndex((c) => c.uid === cartaSeleccionada.uid);
      const carta = state.cartas[cartaIndex];

      if (state.bloquearTablero) return;
      if (cartaIndex === -1) return;
      if (carta.girada || carta.emparejada) return;

      carta.girada = true;
      state.cartasSeleccionadas.push(carta);

      if (state.cartasSeleccionadas.length === 2) {
        state.bloquearTablero = true;
        state.movimientos += 1;
      }
    },

    compararCartas: (state) => {
      const [cartaA, cartaB] = state.cartasSeleccionadas;
      const idxA = state.cartas.findIndex((c) => c.uid === cartaA.uid);
      const idxB = state.cartas.findIndex((c) => c.uid === cartaB.uid);

      if (state.cartasSeleccionadas.length !== 2) return;

      if (cartaA.valor === cartaB.valor) {
        if (idxA >= 0) state.cartas[idxA].emparejada = true;
        if (idxB >= 0) state.cartas[idxB].emparejada = true;
      } else {
        if (idxA >= 0) state.cartas[idxA].girada = false;
        if (idxB >= 0) state.cartas[idxB].girada = false;
      }

      state.cartasSeleccionadas = [];
      state.bloquearTablero = false;
    },

    reiniciarJuego: (state) => {
      state.cartas = state.cartas
        .map((carta) => ({
          ...carta,
          girada: false,
          emparejada: false,
        }))
        .sort(() => Math.random() - 0.5);

      state.cartasSeleccionadas = [];
      state.bloquearTablero = false;
      state.movimientos = 0;
    },
  },
});

export const { selectCarta, compararCartas, reiniciarJuego } = memoriaSlice.actions;
export default memoriaSlice.reducer;
