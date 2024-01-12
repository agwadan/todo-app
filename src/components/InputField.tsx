import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ todo, setToDo }) => {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Task Name"
        className="input__box"
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
