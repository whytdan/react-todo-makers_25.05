import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />

      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
