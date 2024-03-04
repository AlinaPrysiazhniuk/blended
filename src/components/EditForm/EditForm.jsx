import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useState } from 'react';

export const EditForm = ({
  text,
  submitText,
  close,
  isVisibleText,
  updateTodos,
}) => {
  const [textNew, setTextNew] = useState(text);
  const [textIsVisible, setTextIsVisible] = useState(isVisibleText);

  const changeText = e => {
    setTextNew(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitText(textNew);
    updateTodos({ id: text.id, input: textNew });
    setTextIsVisible(!isVisibleText);
    console.log(textNew);
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
