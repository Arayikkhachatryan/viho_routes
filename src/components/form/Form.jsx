import "./FormStyle.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

import React from "react";

const Form = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index.toString()} id="some-todo">
          <div className="task-name">
            <h4>{todo}</h4>
          </div>
          <div className="task-icons">
            <div className="delete">
              <RiDeleteBin6Line
                className="delete-approve"
                onClick={() => {
                  deleteTodo(index);
                }}
              />
            </div>
            <div className="approve">
              <AiOutlineCheck className="delete-approve" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Form;
