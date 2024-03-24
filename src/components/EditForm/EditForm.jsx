import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodos } from '../../redux/todosSlice';

export const EditForm = ({ initialValue, todoId, close }) => {
  const [textNew, setTextNew] = useState(initialValue);
  const dispatch = useDispatch();

  const changeText = e => {
    setTextNew(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTodos({ id: todoId, text: textNew }));
    close();
  };

  return (
    <form className={style.form}>
      <button
        className={style.submitButton}
        type="submit"
        onClick={handleSubmit}
      >
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={close}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={textNew}
        autoFocus
        onChange={changeText}
      />
    </form>
  );
};
