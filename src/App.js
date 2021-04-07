import './App.css';
import React, { useState } from 'react';

/* todo component */
function ToDo({ todo }) {
  return (
    <div className='todo'>
      {todo.text}
    </div>
  );
};

function App() {
  const [todos, setTodos] = React.useState([
    { text: 'Start todo' },
    { text: 'Do todo' },
    { text: 'Complete todo' },
  ]);

  return (
    <div className='app'>
      <div className='todo-list'>
        {
          todos.map((todo, index) => (
            <ToDo
              key={index}
              index={index}
              todo={todo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;