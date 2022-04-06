import { useState } from "react";
import "./LoginForm.css";
import Button from "../../UI/Button";

const initialLoginFormData = {
  username: "",
  password: "",
};
const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const { username, password } = loginFormData;

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(loginFormData);
  };

  const loginFormInputDataChangeHandler = (event) => {
    const formData = {
      ...loginFormData,
      [event.target.name]: event.target.value,
    };
    setLoginFormData(formData);
  };
  return (
    <section className="login-form">
      <form onSubmit={loginHandler}>
        <div className="floating-label-group">
          <input
            type="email"
            className="form-control"
            onChange={loginFormInputDataChangeHandler}
            name="username"
            value={username}
            required
          />
          <label className="floating-label">Username</label>
        </div>
        <div className="floating-label-group">
          <input
            type="password"
            className="form-control"
            onChange={loginFormInputDataChangeHandler}
            name="password"
            value={password}
            required
          />
          <label className="floating-label">Password</label>
        </div>
        <Button btnType="submit" title="Login" />
      </form>
    </section>
  );
};

export default LoginForm;
