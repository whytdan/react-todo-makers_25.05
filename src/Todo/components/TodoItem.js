import React, { useContext } from 'react';
import cancelImg from '../../assets/icons/cancel.svg';
import editImg from '../../assets/icons/pencil.svg';
import { todoContext } from '../../TodoContext';
import classes from '../todo.module.css';

export default function TodoItem(props) {
  const { title, isDone, id } = props.data;

  const { deleteTodo } = useContext(todoContext);

  const handleDelete = () => {
    // call function to delete item (from context)
    deleteTodo(id);
  };

  return (
    <li>
      <p>{title}</p>
      <input value={isDone} type="checkbox" />
      <img
        onClick={handleDelete}
        className={classes.cancelIcon}
        src={cancelImg}
        alt="cancel-img"
      />
      <img className={classes.editIcon} src={editImg} alt="edit-img" />
    </li>
  );
}
