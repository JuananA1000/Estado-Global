import { create } from 'zustand';

export const tareasStore = create((set) => ({
  tareas: [], // Este sería el initialState, sin palabras reservadas, ni leches

  addTarea: (tarea) => {
    set((estado) => ({ tareas: [...estado.tareas, tarea] }));
  },

  eliminarTarea: () => {
    // codigo
  },

  completarTarea: (tareaId) => {
    set((estado) => ({
      tareas: estado.tareas.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
      ),
    }));
  },
}));
