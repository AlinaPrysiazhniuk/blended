import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useState } from 'react';

export const EditForm = ({ text, submitText, close }) => {
  const [textNew, setTextNew] = useState(text);

  //натискаючи кнопку зберегти ми повинні оновити значення текстового поля і передати його у тодолістітем

  const changeText = e => {
    setTextNew(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitText(textNew);
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
