import './App.css';
import React, { useState } from 'react';

/* todo component */
const ToDo = ({ todo, index, handleIsComplete, removeTodo }) => {
  return (
    <div className='todo'
      style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}
    >
      {todo.text}
      <button onClick={() => handleIsComplete(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Start todo', isComplete: false },
    { text: 'Do todo', isComplete: false },
    { text: 'Complete todo', isComplete: false },
  ]);
  const [isComplete, setIsComplete] = useState(false);

  //-------ADD ITEM TO LIST-----------------//
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  //-----------UPDATE TASK ISCOMPLETE-----//
  const handleIsComplete = (index) => {
    const newToDos = [...todos];
    newToDos[index].isComplete = true;
    setTodos(newToDos);
  }

  //-----------REMOVE ITEM FROM TODO-------//
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {
          todos.map((todo, index) => (
            <ToDo
              key={index}
              index={index}
              todo={todo}
              handleIsComplete={handleIsComplete}
              removeTodo={removeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

export default App;