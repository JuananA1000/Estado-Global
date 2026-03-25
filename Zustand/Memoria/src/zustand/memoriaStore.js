import { create } from 'zustand';

export const memoriaStore = create((set) => ({
  cartas: [],

  selectCarta: (carta) =>
    set((estado) => {
      console.log('Seleccionar Carta');
    }),

  compararCartas: () =>
    set((estado) => {
      console.log('Comparar Cartas');
    }),

  reiniciarJuego: () =>
    set((estado) => {
      console.log('Reiniciar Juego');
    }),
}));
