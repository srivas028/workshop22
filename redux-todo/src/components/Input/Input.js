import React, { useState } from "react";
import "./Input.css";

import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const userInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="input">
      <input type="text" value={input} onChange={userInput} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
