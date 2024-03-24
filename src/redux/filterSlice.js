import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterTodos(_, action) {
      return action.payload;
    },
  },
});

export const { filterTodos } = slice.actions;
export default slice.reducer;
export const selectFilterName = state => state.filter;
