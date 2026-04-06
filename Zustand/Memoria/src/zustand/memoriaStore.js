import { create } from 'zustand';

import mariscada from '../img/images/mariscada.png';
import montaña_alien from '../img/images/montaña_alien.png';
import oso_panda from '../img/images/oso_panda.png';
import scary_movie from '../img/images/scary_movie.png';
import serpientes_en_el_avion from '../img/images/serpientes_en_el_avion.png';
import sharknado from '../img/images/sharknado.png';
import tambor_derretido from '../img/images/tambor_derretido.png';
import tortuga_ninja from '../img/images/tortuga_ninja.png';

export const memoriaStore = create((set, get) => ({
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
    const { cartasSeleccionadas, bloquearTablero, movimientos } = get();

    if (bloquearTablero) return;

    console.log('Carta seleccionada:', carta.valor);

    const nuevasSeleccionadas = [...cartasSeleccionadas, carta];

    set({
      cartasSeleccionadas: nuevasSeleccionadas,
      bloquearTablero: nuevasSeleccionadas.length === 2,
      movimientos:
        nuevasSeleccionadas.length === 2
          ? movimientos + 1
          : movimientos,
    });
  },

  compararCartas: () => {
    const { cartasSeleccionadas } = get();

    if (cartasSeleccionadas.length !== 2) return;

    const [c1, c2] = cartasSeleccionadas;

    console.log('Comparando:', c1.valor, 'vs', c2.valor);

    if (c1.valor === c2.valor) {
      console.log('✅ Cartas emparejadas:', c1.valor, c2.valor);
    }

    set({
      cartasSeleccionadas: [],
      bloquearTablero: false,
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