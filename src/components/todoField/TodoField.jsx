import { useState } from "react";
import AddTask from "../addTask/AddTask";
import Form from "../form/Form";
import "./TodoFieldStyle.css";

const TodoField = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div id="body-wrapper">
      <div className="todo-box">
        <div className="todo-header">
          <div className="todo-header-wrap">
            <div className="todo-heading">
              <h3>Todo</h3>
            </div>
            <div className="path">
              <p>Home / Apps / Todo</p>
            </div>
          </div>
        </div>
        <div className="todo-body">
          <div className="card">
            <div className="card-header">
              <div className="card-name">
                <p>To-Do</p>
              </div>
              <div className="finished-checkbox">
                <p>Mark all as finished</p>
                <input type="checkbox" />
              </div>
            </div>
            <div className="todo-tasks"></div>
            <Form
              todos={todos}
              deleteTodo={(todoIndex) => {
                const newTodos = todos.filter(
                  (_, index) => index !== todoIndex
                );
                setTodos(newTodos);
              }}
            />
            <AddTask
              saveTodo={(todoText) => {
                const trimmedText = todoText.trim();

                if (trimmedText.length > 0) {
                  setTodos([...todos, trimmedText]);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoField;
