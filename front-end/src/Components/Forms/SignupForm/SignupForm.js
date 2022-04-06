import "./SignupForm.css";
import Button from "../../UI/Button";
const SignupForm = () => {
  return (
    <section className="signup-form">
      <form>
        <div className="floating-label-group">
          <input
            type="text"
            className="form-control"
            autocomplete="off"
            autofocus
            required
          />
          <label className="floating-label">First Name</label>
        </div>
        <div className="floating-label-group">
          <input
            type="text"
            className="form-control"
            autocomplete="off"
            autofocus
            required
          />
          <label className="floating-label">Last Name</label>
        </div>

        <div className="floating-label-group">
          <input
            type="email"
            className="form-control"
            autocomplete="off"
            autofocus
            required
          />
          <label className="floating-label">Email</label>
        </div>

        <div className="floating-label-group">
          <input
            type="password"
            className="form-control"
            autocomplete="off"
            required
          />
          <label className="floating-label">Password</label>
        </div>

        <div className="floating-label-group">
          <input
            type="password"
            className="form-control"
            autocomplete="off"
            required
          />
          <label className="floating-label">Confirm Password</label>
        </div>
        <Button title="Signup" />
      </form>
    </section>
  );
};

export default SignupForm;
