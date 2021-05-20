import classes from '../todo.module.css';
import React, { useState } from 'react';

export default function TodoEdit(props) {
  const { currentTitle, todoList, setTodoList, index, setEditingTodo } = props;

  const [title, setTitle] = useState(currentTitle);

  const handleEdit = (e) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo, i) => (i === index ? { ...todo, title } : todo))
    );
    setEditingTodo(null);
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
