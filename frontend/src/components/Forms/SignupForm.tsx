import { useState } from "react";
import "./forms.css";

interface Data {
  id: number;
  email: string;
  password: string;
  points: number;
}

export default function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordMatch] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // region InputHandlers
  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordInput(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setConfirmPassword(event.target.value);
  }

  function generateRandomId(): number {
    const randomID = Math.floor(Math.random() * 100000) + 1; // 1 to 100,000
    return randomID;
  }
  // endregion

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setError("Passwords do NOT match");
      return;
    }
    setPasswordMatch(true);

    const newUser: Data = {
      id: generateRandomId(),
      email: email,
      password: password,
      points: 0,
    };

    // updata db.json
    try {
      const responce = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to add User");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-text">Signup</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmailInput}
        placeholder="Enter your email"
        className="form-input"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Create a password"
        className="form-input"
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordInput}
        placeholder="Confirm your password"
        className="form-input"
      />
      <button type="submit" className="form-btn">
        Signup
      </button>
      <p className="form-text">
        Already have an account?{" "}
        <a href="/login" className="form-link">
          Login
        </a>
      </p>
      {!passwordsMatch && <p className="form-error">{error}</p>}
    </form>
  );
}
