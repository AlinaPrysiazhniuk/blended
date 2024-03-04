import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { EditForm } from '../EditForm/EditForm';
import { useState } from 'react';

export const TodoListItem = ({
  todo: { id, input },
  onDelete,
  number,
  updateTodos,
}) => {
  const [isVisible, setIsVisible] = useState(false); //стан що зберігає видимість форми
  const [newTodo, setNewTodo] = useState({ id, input }); //стан для запису відредагованого тексту
  const [textIsVisible, setTextIsVisible] = useState(true);

  const openEditForm = () => {
    setIsVisible(true);
    setTextIsVisible(false);
  };

  const closeEditForm = () => {
    setIsVisible(false);
    setTextIsVisible(true);
  };

  //функція для оновлення тексту тодо, запису його в обєкт тодо та відправвки в ліст ітем
  const changeText = newText => {
    const updatedTodo = { id, input: newText }; //робимо заміну тексту тудушки в обєкті todo
    updateTodos(updatedTodo);
    setIsVisible(false); //форму редагування робимо не видимою
    setNewTodo(updatedTodo); //записуємо в стан тудушки новий обєкт який при
    //натисканін кнопки "зберегти" оновиться значення стану тудушки, це буде уже newTodo
    setTextIsVisible(true);
    // localStorage.setItem(`todo_${id}`, JSON.stringify(updatedTodo));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          Todo #{number}
        </Text>
        {textIsVisible && (
          <Text textAlign="center">{newTodo ? newTodo.input : input}</Text>
        )}
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          <RiDeleteBinLine size={24} />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={openEditForm}
        >
          <RiEdit2Line size={24} />
        </button>
        {isVisible && (
          <EditForm
            text={newTodo ? newTodo.input : input}
            submitText={changeText}
            close={closeEditForm}
            isVisibleText={textIsVisible}
            updateTodos={updateTodos}
          />
        )}
      </div>
    </GridItem>
  );
};
