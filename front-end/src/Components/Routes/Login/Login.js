import "./Login.css";
import LoginForm from "../../Forms/LoginForm/LoginForm";

const Login = () => {
  return (
    <main>
      <section className="login-section">
        <div>
          <h1>Login</h1>
          <p>Get access to your orders.Wishlist and Recommendations</p>
        </div>
      </section>
      <LoginForm />
    </main>
  );
};

export default Login;
