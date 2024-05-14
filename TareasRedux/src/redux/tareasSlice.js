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
      /*
        IDEA: Esta función creará un div (array) de tareas completadas y las añadirá al clickarlas, a la vez las
        eliminará de la lista principal 
      */
      console.log('completar ');
    },
  },
});

export const { addTarea, eliminarTarea, completarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
