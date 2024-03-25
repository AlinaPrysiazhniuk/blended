import { useSelector } from 'react-redux';
import { Grid } from '../Grid/Grid';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { selectTodos } from '../../redux/todosSlice';
import { selectFilterName } from '../../redux/filterSlice';
import { Text } from '../Text/Text';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filteredName = useSelector(selectFilterName);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filteredName.toLowerCase()),
  );

  return (
    <>
      {filteredTodos.length === 0 ? (
        <Text textAlign="center">We did not find any todos ...</Text>
      ) : (
        <Grid>
          {filteredTodos.map((todo, index) => {
            return (
              <TodoListItem key={todo.id} todo={todo} number={index + 1} />
            );
          })}
        </Grid>
      )}
    </>
  );
};
