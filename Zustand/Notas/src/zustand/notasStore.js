import { create } from 'zustand';

export const notasStore = create((set) => ({
  notas: [],

  addNota: (nota) => {
    const nuevaNota = {
      id: Date.now(),
      contenido: nota,
    };

    set((estado) => ({
      notas: [...estado.notas, nuevaNota],
    }));
  },

  eliminarNota: (id) => {
    set((estado) => ({ notas: estado.notas.filter((nota) => nota.id !== id) }));
  },

  editarNota: (id, contenido) =>
    set((estado) => ({
      notas: estado.notas.map((nota) => (nota.id === id ? { ...nota, contenido } : nota)),
    })),
}));
