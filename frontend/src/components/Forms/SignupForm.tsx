import "./forms.css";

export default function SignupForm() {
  return (
    <form className="form">
      <h2 className="form-text">Signup</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="form-input"
      />
      <input
        type="password"
        placeholder="Create a password"
        className="form-input"
      />
      <input
        type="password"
        placeholder="Confirm your password"
        className="form-input"
      />
      <button className="form-btn">Signup</button>
      <p className="form-text">
        Already have an account?{" "}
        <a href="/login" className="form-link">
          Login
        </a>
      </p>
    </form>
  );
}
