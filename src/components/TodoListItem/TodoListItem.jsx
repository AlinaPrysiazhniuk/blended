import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { EditForm } from '../EditForm/EditForm';
import { useState } from 'react';

export const TodoListItem = ({ todo: { id, input }, onDelete, number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState();
  // const [number, setNumber] = useState(1);

  const openEditForm = () => {
    setIsVisible(true);
  };

  const changeText = newText => {
    const updateTodo = { id, input: newText };
    setIsVisible(false);
    handleUpdateTodo(updateTodo);
  };

  const handleUpdateTodo = updateTodo => {
    // setNumber(prevNumber => prevNumber + 1);
    setNewTodo(updateTodo);
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          Todo #{number}
        </Text>
        <Text className={style.textInput}>
          {newTodo ? newTodo.input : input}
        </Text>
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
        {isVisible && <EditForm text={input} submitText={changeText} />}
      </div>
    </GridItem>
  );
};

// import { GridItem } from '../GridItem/GridItem';
// import style from './TodoListItem.module.css';
// import { Text } from '../Text/Text';
// import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
// import { EditForm } from '../EditForm/EditForm';
// import { useState } from 'react';

// export const TodoListItem = ({ todo: { id, input }, onDelete, number }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [newTodo, setNewTodo] = useState();

//   const openEditForm = () => {
//     setIsVisible(true);
//   };

//   const changeText = newText => {
//     const updateTodo = { id, input: newText };
//     setIsVisible(false);
//     handleUpdateTodo(updateTodo);
//   };

//   const handleUpdateTodo = updateTodo => {
//     setNewTodo(updateTodo);
//   };

//   return (
//     <GridItem>
//       <div className={style.box}>
//         <Text textAlign="center" marginBottom="20">
//           Todo #{number}
//         </Text>
//         <Text className={style.textInput}>
//           {newTodo ? newTodo.input : input}
//         </Text>
//         <button
//           className={style.deleteButton}
//           type="button"
//           onClick={() => {
//             onDelete(id);
//           }}
//         >
//           <RiDeleteBinLine size={24} />
//         </button>

//         <button
//           className={style.editButton}
//           type="button"
//           onClick={openEditForm}
//         >
//           <RiEdit2Line size={24} />
//         </button>
//         {isVisible && <EditForm text={input} submitText={changeText} />}
//       </div>
//     </GridItem>
//   );
// };
