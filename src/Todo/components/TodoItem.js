import React from 'react';
import cancelImg from '../../assets/icons/cancel.svg';
import editImg from '../../assets/icons/pencil.svg';
import classes from '../todo.module.css';

export default function TodoItem() {
  return (
    <li>
      <p></p>
      <input type="checkbox" />
      <img className={classes.cancelIcon} src={cancelImg} alt="cancel-img" />
      <img className={classes.editIcon} src={editImg} alt="edit-img" />
    </li>
  );
}
