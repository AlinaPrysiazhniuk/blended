import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../../redux/todosSlice';

import { EditForm } from '../EditForm/EditForm';
import { useState } from 'react';

export const TodoListItem = ({
  todo,
  number,
  // updateTodos,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [isVisible, setIsVisible] = useState(false); //стан що зберігає видимість форми
  // const [newTodo, setNewTodo] = useState({ id, input }); //стан для запису відредагованого тексту
  // const [textIsVisible, setTextIsVisible] = useState(true);

  // const openEditForm = () => {
  //   setIsVisible(true);
  //   setTextIsVisible(false);
  // };

  // const closeEditForm = () => {
  //   setIsVisible(false);
  //   setTextIsVisible(true);
  // };

  //функція для оновлення тексту тодо, запису його в обєкт тодо та відправвки в ліст ітем
  // const changeText = newText => {
  //   const updatedTodo = { id, input: newText }; //робимо заміну тексту тудушки в обєкті todo
  //   updateTodos(updatedTodo);
  //   console.log(updatedTodo);
  //   setIsVisible(false); //форму редагування робимо не видимою
  //   setNewTodo(updatedTodo); //записуємо в стан тудушки новий обєкт який при
  //   //натисканін кнопки "зберегти" оновиться значення стану тудушки, це буде уже newTodo
  //   setTextIsVisible(true);
  // };

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodos(todo.id));
    console.log(todo.id);
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          Todo #{number}
        </Text>
        {isEditing ? (
          <EditForm
            initialValue={todo.text}
            todoId={todo.id}
            close={() => setIsEditing(false)}
          />
        ) : (
          <Text textAlign="center">{todo.text}</Text>
        )}

        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <RiEdit2Line size={24} />
        </button>
        {/* {isVisible && (
          <EditForm
            text={newTodo ? newTodo.input : input}
            submitText={changeText}
            close={closeEditForm}
            isVisibleText={textIsVisible}
          />
        )} */}
      </div>
    </GridItem>
  );
};
