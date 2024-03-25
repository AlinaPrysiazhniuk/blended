import { useState } from 'react';
import style from './Form.module.css';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { changeQueryName } from '../../redux/querySlice';

export const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeQueryName(input));
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
