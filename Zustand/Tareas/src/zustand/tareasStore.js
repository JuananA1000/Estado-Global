import { create } from 'zustand';

export const tareasStore = create((set) => ({
  tareas: [], // Este sería el initialState, sin palabras reservadas, ni leches

  addTarea: (tarea) => {
    set((estado) => ({ tareas: [...estado.tareas, tarea] }));
  },

  eliminarTarea: (id) => {
    set((estado) => ({ tareas: estado.tareas.filter((tarea) => tarea.id !== id) }));
  },

  completarTarea: (tareaId) => {
    set((estado) => ({
      tareas: estado.tareas.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
      ),
    }));
  },
}));
