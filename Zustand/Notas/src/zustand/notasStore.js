import { create } from 'zustand';

export const notasStore = create((set) => ({
  notas: [],

  addNota: (nota) => {
    set((estado) => ({ notas: [...estado.notas, nota] }));
  },

  eliminarNota: () => {
    // codigo
  },

  editarNota: () => {
    // codigo
  },
}));
