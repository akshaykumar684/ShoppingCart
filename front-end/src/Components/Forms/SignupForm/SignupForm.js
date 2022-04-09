import { useState } from "react";
import "./SignupForm.css";
import Button from "../../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../Store/UserStroe/UserStore";

const messages = {
  pswdMisMatch: "Passowrd mismatch.",
  emailAlreadyRegistered: "Email Already registered.",
  accountCreatedSuccessfully: "Account created sucessfully.",
};

const initialSignupFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [signUPFormData, setSignUpFormData] = useState(initialSignupFormData);
  const [showErrorLabel, setShowErrorLabel] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showSuccessLabel, setShowSuccessLabel] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const dispatch = useDispatch();
  const registeredUsersList = useSelector(
    (state) => state.users.registeredUsers
  );

  const { firstName, lastName, email, password, confirmPassword } =
    signUPFormData;

  const signupFormDataChangeHandler = (event) => {
    if (showSuccessLabel) {
      setShowSuccessLabel(false);
      setSuccessMsg("");
    }
    if (showErrorLabel) {
      setShowErrorLabel(false);
      setErrorMsg("");
    }
    const formData = {
      ...signUPFormData,
      [event.target.name]: event.target.value,
    };
    setSignUpFormData(formData);
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg(messages.pswdMisMatch);
      setShowErrorLabel(true);
      return;
    }

    if (registeredUsersList.findIndex((user) => user.email === email) !== -1) {
      setErrorMsg(messages.emailAlreadyRegistered);
      setShowErrorLabel(true);
      return;
    }
    dispatch(userActions.registerNewUser(signUPFormData));
    setSignUpFormData(initialSignupFormData);
    setShowSuccessLabel(true);
    setSuccessMsg(messages.accountCreatedSuccessfully);
  };
  return (
    <section className="signup-form">
      <form onSubmit={signUpHandler}>
        <div className="floating-label-group">
          <input
            type="text"
            className="form-control"
            required
            name="firstName"
            value={firstName}
            onChange={signupFormDataChangeHandler}
          />
          <label className="floating-label">First Name</label>
        </div>
        <div className="floating-label-group">
          <input
            type="text"
            className="form-control"
            required
            name="lastName"
            value={lastName}
            onChange={signupFormDataChangeHandler}
          />
          <label className="floating-label">Last Name</label>
        </div>

        <div className="floating-label-group">
          <input
            type="email"
            className="form-control"
            required
            name="email"
            value={email}
            onChange={signupFormDataChangeHandler}
          />
          <label className="floating-label">Email</label>
        </div>

        <div className="floating-label-group">
          <input
            type="password"
            className="form-control"
            required
            name="password"
            value={password}
            onChange={signupFormDataChangeHandler}
          />
          <label className="floating-label">Password</label>
        </div>

        <div className="floating-label-group">
          <input
            type="password"
            className="form-control"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={signupFormDataChangeHandler}
          />
          <label className="floating-label">Confirm Password</label>
        </div>
        {showErrorLabel && <p className="error-label">{errorMsg}</p>}
        {showSuccessLabel && <p className="success-label">{successMsg}</p>}
        <Button title="Signup" btnType="submit" />
      </form>
    </section>
  );
};

export default SignupForm;
