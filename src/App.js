import React from 'react';
import Todo from './Todo';
import TodoContextProvider from './TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
