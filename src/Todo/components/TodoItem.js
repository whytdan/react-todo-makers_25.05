import React from 'react';
import cancelImg from '../../assets/icons/cancel.svg';
import editImg from '../../assets/icons/pencil.svg';
import classes from '../todo.module.css';

export default function TodoItem(props) {
  const { todo, index, handleIsDoneChange, removeTodo, handleEditClick } =
    props;

  return (
    <li key={index}>
      <p style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.title}
      </p>
      <input
        onChange={() => handleIsDoneChange(index)}
        type="checkbox"
        value={todo.isDone}
      />
      <img
        className={classes.cancelIcon}
        src={cancelImg}
        onClick={() => removeTodo(index)}
        alt="cancel-img"
      />
      <img
        onClick={() => handleEditClick(index)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </li>
  );
}
