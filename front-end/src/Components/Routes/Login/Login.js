import "./Login.css";
import Button from "../../UI/Button";

const Login = () => {
  return (
    <main>
      <section className="login-section">
        <div>
          <h1>Login</h1>
          <p>Get access to your orders.Wishlist and Recommendations</p>
        </div>
      </section>
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
    </main>
  );
};

export default Login;
