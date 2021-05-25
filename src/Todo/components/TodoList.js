import React, { useContext, useEffect, useState } from 'react';
import { todoContext } from '../../TodoContext';
import classes from '../todo.module.css';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEditClick = (index) => {
    setEditingTodo(index);
  };

  const { todoList, fetchTodos } = useContext(todoContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todoList);

  return <ul className={classes.todoList}></ul>;
}
