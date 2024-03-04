import { useState } from 'react';
import style from './Form.module.css';
import { FiSearch } from 'react-icons/fi';
import { nanoid } from 'nanoid';

export const FormTodos = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ input, id: nanoid() });
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
