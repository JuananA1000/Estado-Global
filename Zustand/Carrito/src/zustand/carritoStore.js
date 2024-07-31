import { create } from 'zustand';

export const carritoStore = create((set) => ({
  carrito: {
    items: [],
    total: 0,
  },

  addInstrumento: (instrumento) =>
    set((estado) => ({
      // code
    })),

  eliminarInstrumento: () => {
    // code
  },
}));
