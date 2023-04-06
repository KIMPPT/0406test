import { useState } from "react";

let Input = () => {
  let [addTodo, setAddTodo] = useState("");
  let inputChange=(e) => {
    setAddTodo(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        onChange={inputChange}
        value={addTodo}
      />
      <button>+</button>
    </div>
  );
};
export default Input;
