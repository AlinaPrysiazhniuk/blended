import { FormTodos } from '../components/FormTodos/FormTodos';
// import { useEffect, useState } from 'react';
import { TodoList } from 'components';
import { Filter } from 'components/Filter/Filter';

export const Todos = () => {
  return (
    <>
      <FormTodos />
      {/* <Text textAlign="center">There are no any todos ...</Text> */}
      <Filter />
      <TodoList
      // todos={todos}
      // onDelete={deleteTodo}
      // updateTodos={updateTodos}
      />
    </>
  );
};

// const getTodosStorage = () => {
//   const todosStorage = window.localStorage.getItem('todos');
//   return todosStorage !== null ? JSON.parse(todosStorage) : [];
// };

// const [todos, setTodos] = useState(getTodosStorxage);

// const onSubmit = newTodo => {
//   setTodos(prevTodo => [...prevTodo, newTodo]);
// };

// const updateTodos = updatedTodo => {
//   setTodos(prevTodos => {
//     return prevTodos.map(todo =>
//       todo.id === updatedTodo.id ? updatedTodo : todo,
//     );
//   });
// };

// const deleteTodo = todoId => {
//   setTodos(prevTodo => {
//     return prevTodo.filter(todo => todo.id != todoId);
//   });
// };

// useEffect(() => {
//   window.localStorage.setItem('todos', JSON.stringify(todos));
// }, [todos]);
