import React, { useContext } from 'react';
import cancelImg from '../../assets/icons/cancel.svg';
import editImg from '../../assets/icons/pencil.svg';
import { todoContext } from '../../TodoContext';
import classes from '../todo.module.css';

export default function TodoItem(props) {
  const { title, isDone, id } = props.data;

  const { deleteTodo, changeIsDoneStatus, changeEditId } =
    useContext(todoContext);

  const handleDelete = () => {
    // call function to delete item (from context)
    deleteTodo(id);
  };

  const handleIsDoneChange = () => {
    // call function to reverse isDone status of todo
    changeIsDoneStatus(id, isDone);
  };

  return (
    <li>
      <p className={isDone ? classes.lineThrough : ''}>{title}</p>
      <input onChange={handleIsDoneChange} checked={isDone} type="checkbox" />
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
