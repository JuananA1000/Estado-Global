import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],

  reducers: {
    addTarea: (state, action) => {
      const nuevaTarea = {
        id: Date.now(),
        texto: action.payload,
        completada: false,
      };
      state.push(nuevaTarea);
    },

    eliminarTarea: (state, action) => {
      return state.filter((tarea) => tarea.id !== action.payload);
    },

    completarTarea: (state, action) => {
      const todoIndex = state.findIndex((tarea) => tarea.id === action.payload);
      if (todoIndex !== -1) {
        state[todoIndex].completada = !state[todoIndex].completada;
      }
    },
  },
});

export const { addTarea, eliminarTarea, completarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
