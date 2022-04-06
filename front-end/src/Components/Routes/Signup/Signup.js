import "./Signup.css";
import Button from "../../UI/Button";

const Signup = () => {
  return (
    <main>
      <section className="signup-section">
        <div>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </div>
      </section>
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
    </main>
  );
};

export default Signup;
