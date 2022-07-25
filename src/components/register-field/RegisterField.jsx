import "./RegisterField.scss";

import React from "react";
import RegisterForm from "../register-form/RegisterForm";
import Socials from "../socials/Socials";

export const RegisterField = () => {
  return (
    <div id="wrapper">
      <div id="login-container">
        <div id="heading">
          <h4>Create Your Account</h4>
          <h6>Enter your personal details to create account</h6>
        </div>
        <RegisterForm/>
        <Socials />
      </div>
    </div>
  );
};

 