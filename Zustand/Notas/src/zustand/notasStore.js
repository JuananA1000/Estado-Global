import { create } from 'zustand';

export const notasStore = create((set) => ({
  notas: [],

  addNota: (nota) => {
    set((estado) => ({ notas: [...estado.notas, nota] }));
  },

  eliminarNota: (id) => {
    set((estado) => ({ notas: estado.notas.filter((nota) => nota.id !== id) }));
  },

  editarNota: () => {
    // codigo
  },
}));
