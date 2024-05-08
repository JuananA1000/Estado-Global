import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],

  reducers: {
    addTarea: (state, action) => {
      state.push(action.payload);
    },

    eliminarTarea: (state, action) => {
      return state.filter((tarea) => tarea !== action.payload);
    },

    completarTarea: (state, action) => {
      // Esta funcion pintará de verde cada tarea al pulsar en el chack
      state.tareas = state.tareas.map(tarea => {
        if (tarea.texto === action.payload) {
          return { ...tarea, marcada: !tarea.marcada };
        } else {
          return tarea;
        }
      });
    },
  },
});

export const { addTarea, eliminarTarea, completarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
