import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilterName } from '../../redux/filterSlice';
import { filterTodos } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilterName);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterTodos(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleFilter}
    />
  );
};
