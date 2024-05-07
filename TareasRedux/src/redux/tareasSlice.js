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
  },
});

export const { addTarea, eliminarTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
