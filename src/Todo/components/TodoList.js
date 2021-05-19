import React from 'react';
import cancelImg from '../../assets/icons/cancel.svg';
import classes from '../todo.module.css';

export default function TodoList(props) {
  const { todoList, setTodoList } = props;

  return (
    <ul className={classes.todoList}>
      {todoList.map((todo, index) => (
        <li key={index}>
          <p>{todo.title}</p>
          <input type="checkbox" value={todo.isDone} />
          <img src={cancelImg} />
        </li>
      ))}
    </ul>
  );
}
