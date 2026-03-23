import { createSlice } from '@reduxjs/toolkit';

import mariscada from '../img/mariscada.png';
import montaña_alien from '../img/montaña_alien.png';
import oso_panda from '../img/oso_panda.png';
import scary_movie from '../img/scary_movie.png';
import serpientes_en_el_avion from '../img/serpientes_en_el_avion.png';
import sharknado from '../img/sharknado.png';
import tambor_derretido from '../img/tambor_derretido.png';
import tortuga_ninja from '../img/tortuga_ninja.png';

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
    bloquearTablero: false, // Mientras se comparan las cartas, el tablero se bloquea
    movimientos: 0,
  },

  reducers: {
    selectCarta: (state, action) => {
      const carta = action.payload;
      console.log('Carta: ', carta.valor);

      const cartaGirada = state.cartasSeleccionadas.find((c) => c.uid === carta.uid);
      if (cartaGirada) {
        cartaGirada.girada = true; // Si la carta ya está seleccionada, no hacer nada
      }

      // si hay menos de 2 cartas seleccionadas, push. Que es push?
      if (state.cartasSeleccionadas.length < 2) {
        state.cartasSeleccionadas.push(cartaGirada || { ...carta, girada: true }); // Si la carta no está seleccionada, agregarla al array de seleccionadas
      }

      // si hay 2 cartas seleccionadas, bloquear el tablero y aumentar movimientos
      if (state.cartasSeleccionadas.length === 2) {
        state.bloquearTablero = true;
        state.movimientos += 1;
      }
    },

    compararCartas: (state) => {
      // si hay 2 cartas seleccionadas, comparar.
      if (state.cartasSeleccionadas.length === 2) {
        if (state.cartasSeleccionadas[0].valor === state.cartasSeleccionadas[1].valor) {
          // Si son iguales, marcar como emparejadas
          state.cartasSeleccionadas[0].emparejada = true;
          state.cartasSeleccionadas[1].emparejada = true;

          console.log('Pareja encontrada: ', state.cartasSeleccionadas[0].valor, state.cartasSeleccionadas[1].valor);
        } else {
          // Si no son iguales, marcar como no giradas para que se oculten nuevamente
          state.cartasSeleccionadas[0].girada = false;
          state.cartasSeleccionadas[1].girada = false;
        }
        // Desbloquear el tablero en ambos casos (iguales o diferentes)
        state.bloquearTablero = false;
        // Limpiar las cartas seleccionadas después de comparar
        state.cartasSeleccionadas = [];
      }
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
