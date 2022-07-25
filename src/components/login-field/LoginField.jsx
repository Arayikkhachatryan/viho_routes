import "./LoginField.css";
import LoginForm from "../login-form/LoginForm"
import Socials from "../socials/Socials";

export const LoginField = () => {
  return (
    <div id="wrapper">
      <div id="login-container">
        <div id="heading">
          <h4>Login</h4>
          <h6>Welcome back! Log in to your account.</h6>
        </div>
        <LoginForm />
        <Socials/>
      </div>
    </div>
  );
};


