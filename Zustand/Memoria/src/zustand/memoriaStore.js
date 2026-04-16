import { create } from 'zustand';

import mariscada from '../img/images/mariscada.png';
import montaña_alien from '../img/images/montaña_alien.png';
import oso_panda from '../img/images/oso_panda.png';
import scary_movie from '../img/images/scary_movie.png';
import serpientes_en_el_avion from '../img/images/serpientes_en_el_avion.png';
import sharknado from '../img/images/sharknado.png';
import tambor_derretido from '../img/images/tambor_derretido.png';
import tortuga_ninja from '../img/images/tortuga_ninja.png';

export const memoriaStore = create((set) => ({
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

  selectCarta: (carta) => {
    set((estado) => {
      if (estado.bloquearTablero) return estado;

      const cartaIndex = estado.cartas.findIndex((c) => c.uid === carta.uid);
      if (cartaIndex === -1) return estado;

      const cartaSeleccionada = estado.cartas[cartaIndex];

      if (cartaSeleccionada.girada || cartaSeleccionada.emparejada) return estado;

      cartaSeleccionada.girada = true;
      estado.cartasSeleccionadas.push(cartaSeleccionada);

      if (estado.cartasSeleccionadas.length === 2) {
        estado.bloquearTablero = true;
        estado.movimientos += 1;
      }

      // console.log('Seleccionar carta: ', carta.valor);

      return { ...estado };
    });
  },

  compararCartas: () => {
    set((estado) => {
      const cartas = estado.cartasSeleccionadas;
      console.log('Comparar cartas desde memoriaStore:', cartas);
      if (cartas.length === 2) {
        console.log('Carta 1:', cartas[0]);
        console.log('Carta 2:', cartas[1]);

        if (cartas[0].valor === cartas[1].valor) {
          console.log('¡Emparejadas!');
          estado.cartas = estado.cartas.map((c) => {
            if (c.uid === cartas[0].uid || c.uid === cartas[1].uid) {
              return { ...c, emparejada: true };
            }
            return c;
          });
        } else {
          console.log('¡No emparejadas!');
          estado.cartas = estado.cartas.map((c) => {
            if (c.uid === cartas[0].uid || c.uid === cartas[1].uid) {
              return { ...c, girada: false };
            }
            return c;
          });
        }
      }

      return { ...estado };
    });
  },

  reiniciarJuego: () => {
    set((estado) => ({
      cartas: estado.cartas.sort(() => Math.random() - 0.5),
      cartasSeleccionadas: [],
      bloquearTablero: false,
      movimientos: 0,
    }));
  },
}));
