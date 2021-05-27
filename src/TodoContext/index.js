import axios from 'axios';
import React, { useReducer } from 'react';

const INIT_STATE = {
  todoList: [],
  editTodoId: null,
};

// reducer must return new state
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_TODOLIST':
      return {
        ...state,
        todoList: action.payload,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case 'CHANGE_TODO_STATUS':
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case 'CHANGE_EDIT_ID':
      return {
        ...state,
        editTodoId: action.payload,
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export const todoContext = React.createContext();

const URL = 'http://localhost:8000';

export default function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchTodos = async () => {
    const response = await axios.get(`${URL}/todos`);
    console.log('server data: ', response.data);

    const todos = response.data;

    // action always obj with two keys
    const action = {
      type: 'SET_TODOLIST',
      payload: todos,
    };

    dispatch(action);
  };

  const createTodo = async (todo) => {
    const { data } = await axios.post(`${URL}/todos`, todo);

    // fetchTodos();
    dispatch({
      type: 'ADD_TODO',
      payload: data,
    });
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${URL}/todos/${id}`);

    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  };

  const changeIsDoneStatus = async (id, prevIsDone) => {
    dispatch({
      type: 'CHANGE_TODO_STATUS',
      payload: id,
    });
    await axios.patch(`${URL}/todos/${id}`, { isDone: !prevIsDone });
  };

  const changeEditId = (id) => {
    dispatch({
      type: 'CHANGE_EDIT_ID',
      payload: id,
    });
  };

  const changeTodo = async (id, title) => {
    const { data } = await axios.patch(`${URL}/todos/${id}`, { title });
    console.log(data);

    dispatch({
      type: 'EDIT_TODO',
      payload: data,
    });
    changeEditId(null);
  };

  return (
    <todoContext.Provider
      value={{
        todoList: state.todoList,
        editId: state.editTodoId,
        fetchTodos,
        createTodo,
        deleteTodo,
        changeIsDoneStatus,
        changeEditId,
        changeTodo,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
}
