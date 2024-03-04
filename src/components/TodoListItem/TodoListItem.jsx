import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { EditForm } from '../EditForm/EditForm';
import { useState } from 'react';

export const TodoListItem = ({ todo: { id, input }, onDelete, number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState(); //стан для запису відредагованого тексту

  const openEditForm = () => {
    setIsVisible(true);
  };

  const closeEditForm = () => {
    setIsVisible(false);
  };

  //функція для оновлення тексту тодо, запису його в обєкт тодо та відправвки в ліст ітем
  const changeText = newText => {
    const updateTodo = { id, input: newText }; //робимо заміну тексту тудушки в обєкті todo
    setIsVisible(false); //форму редагування робимо не видимою
    setNewTodo(updateTodo); //записуємо в стан тудушки новий обєкт який при
    //натисканін кнопки "зберегти" оновиться значення стану тудушки, це буде уже newTodo
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          Todo #{number}
        </Text>
        <Text textAlign="center">{newTodo ? newTodo.input : input}</Text>
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
          />
        )}
      </div>
    </GridItem>
  );
};
