import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'query',
  initialState: {
    name: '',
  },
  reducers: {
    changeQueryName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeQueryName } = slice.actions;
export default slice.reducer;

export const selectQueryName = state => state.query.name;
