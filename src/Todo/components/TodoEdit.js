import classes from '../todo.module.css';
import React, { useContext, useState } from 'react';
import { todoContext } from '../../TodoContext';

export default function TodoEdit(props) {
  const { title: todoTitle, id } = props.data;

  const [title, setTitle] = useState(todoTitle);

  const { changeTodo } = useContext(todoContext);

  const handleEdit = (e) => {
    e.preventDefault();
    // call function to change todo in server and state
    changeTodo(id, title);
  };

  return (
    <li className={classes.editingTodo}>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          required
          value={title}
        />
        <button>Edit</button>
      </form>
    </li>
  );
}
