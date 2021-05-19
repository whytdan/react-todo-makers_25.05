import React, { useState } from 'react';
import classes from '../todo.module.css';

export default function Form(props) {
  const { todoList, setTodoList } = props;

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { title, isDone: false }]);
    setTitle(''); // new
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
