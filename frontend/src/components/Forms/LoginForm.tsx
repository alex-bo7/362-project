import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./forms.css";

interface LoginFormProps {
  HandleLogin: () => void;
}

export default function LoginForm(props: LoginFormProps) {
  const db = useFetch("http://localhost:3000/users");
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function HandleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function HandlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function GetUserIndex(): number {
    for (let i = 0; i < db.data.length; ++i) {
      if (db.data[i].email == email) return i;
    }
    return -1;
  }

  function DoesPasswordMatch(index: number): boolean {
    return db.data[index].password == password;
  }

  function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const index = GetUserIndex();
    if (index == -1) {
      setErrorMessage("Email does NOT exsist in database");
      return;
    }

    if (DoesPasswordMatch(index)) {
      props.HandleLogin();
      navigate("/account");
    } else setErrorMessage("Incorrect password");
  }

  return (
    <form className="form" onSubmit={HandleSubmit}>
      <h2 className="form-text">Login</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={HandleEmail}
        placeholder="Enter your email"
        className="form-input"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={HandlePassword}
        placeholder="Enter your password"
        className="form-input"
      />
      <button type="submit" className="form-btn">
        Login
      </button>
      <p className="form-text">
        Don't have an account?{" "}
        <a href="/signup" className="form-link">
          Signup
        </a>
      </p>
      <p className="form-error">{errorMessage}</p>
    </form>
  );
}
