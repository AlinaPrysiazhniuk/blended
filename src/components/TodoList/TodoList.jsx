import { Grid } from '../Grid/Grid';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />;
      })}
    </Grid>
  );
};
