import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'qwe' },
    ],
    currentTodo: null,
  },
  reducers: {
    addTodos(state, action) {
      state.items.push(action.payload);
      //   return {
      //     ...state,
      //     items: [...state.items, action.payload],
      //   };
    },
    deleteTodos(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateTodos(state, action) {
      //   console.log(action.payload);
      const taskIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      state.items[taskIndex] = action.payload;
      console.log(state.items[taskIndex]);
      //   console.log(action.payload.id);
    },
  },
});

export const { addTodos, deleteTodos, updateTodos } = slice.actions;
export default slice.reducer;
export const selectTodos = state => state.todos.items;
