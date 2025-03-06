import "./forms.css";

export default function LoginForm() {
  return (
    <form className="form">
      <h2 className="form-text">Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="form-input"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="form-input"
      />
      <button className="form-btn">Login</button>
      <p className="form-text">
        Don't have an account?{" "}
        <a href="/signup" className="form-link">
          Signup
        </a>
      </p>
    </form>
  );
}
