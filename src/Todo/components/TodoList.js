import React, { useContext, useEffect, useState } from 'react';
import { todoContext } from '../../TodoContext';
import classes from '../todo.module.css';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todoList, fetchTodos, editId } = useContext(todoContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul className={classes.todoList}>
      {todoList.map((todo) =>
        todo.id === editId ? (
          <TodoEdit data={todo} key={todo.id} />
        ) : (
          <TodoItem data={todo} key={todo.id} />
        )
      )}
    </ul>
  );
}
