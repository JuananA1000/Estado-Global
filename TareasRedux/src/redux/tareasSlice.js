import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],

  reducers: {
    addTarea: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTarea } = tareasSlice.actions;
export default tareasSlice.reducer;
