import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],

  reducers: {
    addTarea: (state, action) => {
      const newTodo = {
        id: Date.now(),
        texto: action.payload,
        completada: false,
      };
      state.push(newTodo);
    },

    eliminarTarea: (state, action) => {
      const todoId = action.payload;
      return state.filter((tarea) => tarea.id !== todoId);
    },

    completarTarea: (state, action) => {
      const todoId = action.payload;
      const todoIndex = state.findIndex((tarea) => tarea.id === todoId);
      if (todoIndex !== -1) {
        state[todoIndex].completada = !state[todoIndex].completada;
      }
    },
  },
});

export const { addTarea, eliminarTarea, completarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
