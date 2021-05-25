import React, { useContext, useState } from 'react';
import { todoContext } from '../../TodoContext';
import classes from '../todo.module.css';

export default function Form() {
  const [title, setTitle] = useState('');

  const { createTodo } = useContext(todoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit data to server
    const data = {
      title,
      isDone: false,
    };
    createTodo(data);
    setTitle('');
  };

  return (
    <div className={classes.formWrapper}>
      <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          name="title"
          type="text"
          required
          value={title} // new
        />
        <button>Create</button>
      </form>

      {/* <pre>{JSON.stringify(todoList, 0, 2)}</pre> */}
    </div>
  );
}
