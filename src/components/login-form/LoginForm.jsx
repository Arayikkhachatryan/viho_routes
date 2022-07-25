import "./LoginForm.css";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { InputField } from "../common/InputField";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  const REGEX_EMAIL = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const onSubmitLogin = () => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.email.match(REGEX_EMAIL) ||
      !inputs.password.match(REGEX_PASSWORD)
    ) return
    else {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())

      inputs.toDirection= "/todo";


    }
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    toDirection: ""
  });

  const handleInput = (value, name) => {
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form>
      <div id="form-group">
        <InputField
          type="text"
          name="email"
          value={inputs.email}
          changeValue={handleInput}
          placeholder="Test@gmail.com"
          icon={<AiOutlineMail />}
          label="Email Address"
          divName="email"
        />
      </div>
      <div id="form-group">
        <InputField
          type={!visible ? "password" : "text"}
          name="password"
          value={inputs.password}
          changeValue={handleInput}
          placeholder="********"
          icon={<AiOutlineLock />}
          label="Password"
          divName="password"
        />
        <div className="show-hide" onClick={() => setVisible((prev) => !prev)}>
          <p>{!visible ? "Show" : "Hide"}</p>
        </div>
      </div>
      <div id="form-group">
        <div className="create-btn" onClick={onSubmitLogin}>
          <Link to={inputs.toDirection} >Sign in</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
