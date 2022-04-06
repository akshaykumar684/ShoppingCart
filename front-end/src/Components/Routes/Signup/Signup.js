import "./Signup.css";
import SignupForm from "../../Forms/SignupForm/SignupForm";

const Signup = () => {
  return (
    <main>
      <section className="signup-section">
        <div>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </div>
      </section>
      <SignupForm />
    </main>
  );
};

export default Signup;
