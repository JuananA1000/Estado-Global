import { create } from 'zustand';

export const tareasStore = create((set) => ({
  tareas: [], // Este sería el initialState, sin palabras reservadas, ni leches

  addTarea: (tarea) => {
    set((estado) => ({ tareas: [...estado.tareas, tarea] }));
  },
}));
