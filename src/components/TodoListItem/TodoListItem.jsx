import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from '../Text/Text';
// import RiDeleteBinLine from 'react-icons';

export const TodoListItem = ({ todo: { id, input }, onDelete }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {input}
        </Text>
        <Text>Some description</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
          {/* <RiDeleteBinLine size={24} /> */}
        </button>
      </div>
    </GridItem>
  );
};
