import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("");
  return (
    <>
      <div className="App">
        <span className="heading">Kazi</span>

        <InputField todo={todo} setToDo={setToDo} />
      </div>
    </>
  );
};

export default App;
