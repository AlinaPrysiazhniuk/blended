import { FormTodos } from '../components/FormTodos/FormTodos';
import { TodoList } from 'components';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/todosSlice';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <FormTodos />

      {/*  */}
      {todos.length !== 0 && <Filter />}

      <TodoList
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
