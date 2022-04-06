import { useState } from "react";
import "./SignupForm.css";
import Button from "../../UI/Button";
const initialSignupFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [signUPFormData, setSignUpFormData] = useState(initialSignupFormData);
  const { firstName, lastName, email, password, confirmPassword } =
    signUPFormData;

  const signupFormDataChangeHandler = (event) => {
    const formData = {
      ...signUPFormData,
      [event.target.name]: event.target.value,
    };
    setSignUpFormData(formData);
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    console.log(signUPFormData);
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
        <Button title="Signup" btnType="submit" />
      </form>
    </section>
  );
};

export default SignupForm;
