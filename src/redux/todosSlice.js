import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
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
      state.currentTodo = action.payload;
      state.items = state.items.map(item =>
        item.id === state.currentTodo.id ? state.currentTodo : item,
      );
      // const taskIndex = state.items.findIndex(
      //   item => item.id === state.currentTodo.id,
      // );
      // state.items[taskIndex] = state.currentTodo;
    },
  },
});

export const { addTodos, deleteTodos, updateTodos } = slice.actions;
export default slice.reducer;
export const selectTodos = state => state.todos.items;
