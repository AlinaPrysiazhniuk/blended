import { useState } from 'react';
import style from './Form.module.css';
import { FiSearch } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../redux/todosSlice';

export const FormTodos = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodos({ id: nanoid(), text: input }));
    console.log({ id: nanoid(), text: input });
    // onSubmit({ id: nanoid(), input });
    setInput('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={input}
        required
        autoFocus
        onChange={handleChange}
      />
    </form>
  );
};
