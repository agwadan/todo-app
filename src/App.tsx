import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import "./App.css";

const App: React.FC = () => {
  const [todoText, setToDoText] = useState<string>("");
  const [todos, setToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText) {
      setToDos([...todos, { id: Date.now(), todo: todoText, isDone: false }]);
      setToDoText("");
    }
  };

  return (
    <>
      <div className="App">
        <span className="heading">Kazi</span>

        <InputField
          todoText={todoText}
          setToDoText={setToDoText}
          handleAdd={handleAdd}
        />
      </div>
    </>
  );
};

export default App;
