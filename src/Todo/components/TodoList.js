import React, { useState } from 'react';
import classes from '../todo.module.css';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const { todoList, setTodoList } = props;

  const [editingTodo, setEditingTodo] = useState(null);

  const removeTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const handleIsDoneChange = (index) => {
    setTodoList(
      todoList.map((todo, i) =>
        index === i ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEditClick = (index) => {
    setEditingTodo(index);
  };

  return (
    <ul className={classes.todoList}>
      {todoList.map((todo, index) =>
        index === editingTodo ? (
          <TodoEdit
            currentTitle={todo.title}
            todoList={todoList}
            setTodoList={setTodoList}
            index={index}
            setEditingTodo={setEditingTodo}
          />
        ) : (
          <TodoItem
            todo={todo}
            index={index}
            handleIsDoneChange={handleIsDoneChange}
            removeTodo={removeTodo}
            handleEditClick={handleEditClick}
          />
        )
      )}
    </ul>
  );
}
