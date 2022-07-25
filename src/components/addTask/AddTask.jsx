import { useState } from "react";
import "./AddTaskStyle.css";

const AddTask = ({ saveTodo }) => {
  const [isVisibleName, setIsVisibleName] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="add-task">
      {isVisibleName && (
        <div className="input-newtask">
          <textarea
            id="newtask"
            placeholder="Enter new task here..."
            onInput={(event) => {
              setInputValue(event.target.value);
            }}
            value={inputValue}
          ></textarea>
        </div>
      )}
      <button
        onClick={() => setIsVisibleName((prev) => !prev)}
        className={`base-btn ${!isVisibleName ? "visible" : "hidden"}`}
      >
        {isVisibleName ? "Close" : "Add new task"}
      </button>
      {isVisibleName && (
        <button
          className="opened-add-newtask"
          onClick={() => {
            saveTodo(inputValue);
          }}
        >
          Add new task
        </button>
      )}
    </div>
  );
};

export default AddTask;
