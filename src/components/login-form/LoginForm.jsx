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
    )
      console.log("1111");
    else {
      fetch("https://api.com")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
        <div className="create-btn">
          <Link to="/todo" onClick={onSubmitLogin}>Create Account</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
