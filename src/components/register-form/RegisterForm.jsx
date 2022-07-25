import "./RegisterForm.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { InputField } from "../common/InputField";
import { useState } from "react";

const RegisterForm = () => {
  const [visible, setVisible] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
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
    <>
      <div id="form-group">
        <label htmlFor="" className="group-heading">
          Your Name
        </label>
        <div className="input-group">
          <InputField
            type="text"
            name="name"
            value={inputs.name}
            changeValue={handleInput}
            placeholder="First Name"
            icon={<AiOutlineUser />}
            divName="name"
          />
          <InputField
            type="text"
            name="lastName"
            value={inputs.lastName}
            changeValue={handleInput}
            placeholder="Last Name"
            icon={<AiOutlineUser />}
            divName="surname"
          />
        </div>
      </div>
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
      <div className="form-group">
        <input type="checkbox" required/>
        <label className="agreement">
          Agree With <span>Privacy Policy</span>
        </label>
      </div>
      <div className="create-btn">
        <button>Create Account</button>
      </div>
    </>
  );
};

export default RegisterForm;
