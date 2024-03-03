import { Text } from 'components';
import { FormTodos } from '../components/FormTodos/FormTodos';
import { useState } from 'react';
import { TodoList } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = newTodo => {
    setTodos(prevTodo => {
      return [...prevTodo, newTodo];
    });
    console.log(todos);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id != todoId);
    });
  };

  return (
    <>
      <FormTodos onSubmit={onSubmit} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}

      {todos.length > 0 && <TodoList todos={todos} onDelete={deleteTodo} />}
    </>
  );
};
