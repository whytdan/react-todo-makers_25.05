import axios from 'axios';
import React, { useReducer } from 'react';

const INIT_STATE = {
  todoList: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_TODOLIST':
      return {
        ...state,
        todoList: action.payload,
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

    const action = {
      type: 'SET_TODOLIST',
      payload: todos,
    };

    dispatch(action);
  };

  return (
    <todoContext.Provider
      value={{
        todoList: state.todoList,
        fetchTodos: fetchTodos,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
}
