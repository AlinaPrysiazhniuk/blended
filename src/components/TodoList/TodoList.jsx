import { Grid } from '../Grid/Grid';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos, onDelete, updateTodos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            number={index + 1}
            updateTodos={updateTodos}
          />
        );
      })}
    </Grid>
  );
};
