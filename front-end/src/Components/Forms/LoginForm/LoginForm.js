import "./LoginForm.css";
import Button from "../../UI/Button";
const LoginForm = () => {
  return (
    <section className="login-form">
      <form>
        <div className="floating-label-group">
          <input
            type="email"
            className="form-control"
            autocomplete="off"
            autofocus
            required
          />
          <label className="floating-label">Username</label>
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
        {/* <button>Login</button> */}
        <Button title="Login" />
      </form>
    </section>
  );
};

export default LoginForm;
