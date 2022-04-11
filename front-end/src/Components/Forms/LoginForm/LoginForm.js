import { useState } from "react";
import "./LoginForm.css";
import Button from "../../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../Store/UserStroe/UserStore";
import { useHistory } from "react-router-dom";

const initialLoginFormData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const [showErrorLabel, setShowErrorLabel] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { username, password } = loginFormData;

  const registeredUsersList = useSelector(
    (state) => state.users.registeredUsers
  );

  const loginHandler = (event) => {
    event.preventDefault();
    const currentUser = registeredUsersList.find(
      (user) => user.email === username && user.password === password
    );

    if (currentUser === undefined) {
      setShowErrorLabel(true);
      return;
    }

    dispatch(userActions.loginAndAuthenticateUser(username));
    history.push("/product");
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
        {showErrorLabel && <p className="error-label">Invalid Credentials</p>}
        <Button btnType="submit" title="Login" />
      </form>
    </section>
  );
};

export default LoginForm;
