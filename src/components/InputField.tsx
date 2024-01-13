import React from "react";
import "./styles.css";

interface Props {
  todoText: string;
  setToDoText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todoText, setToDoText, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Task Name"
        className="input__box"
        value={todoText}
        onChange={(e) => setToDoText(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
