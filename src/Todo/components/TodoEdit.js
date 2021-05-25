import classes from '../todo.module.css';
import React, { useState } from 'react';

export default function TodoEdit() {
  const [title, setTitle] = useState('');

  const handleEdit = (e) => {
    e.preventDefault();
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
