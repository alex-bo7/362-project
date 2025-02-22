import { useState } from "react";
import "./nav.css";

export default function Nav() {
  const [isLoggedIn, setIsLoggenIn] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // TODO: Handle user login - authenticate, auto-SSO?

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  console.log(showMenu);

  return (
    <nav className="nav">
      <ul className="nav-ul nav-list">
        <li>Logo.</li>
        <li className="nav-icon menu-icon">
          <i
            className={`fa-solid ${showMenu ? "fa-bars-staggered" : "fa-bars"}`}
            onClick={toggleMenu}
          ></i>
        </li>
      </ul>
      {!isLoggedIn && (
        <ul className={`nav-ul menu-list ${showMenu ? "show" : "none"}`}>
          <a href="/" className="nav-links authenticate">
            <li>Login</li>
          </a>
          <a href="/" className="nav-links authenticate">
            <li>Sign Up</li>
          </a>
        </ul>
      )}
      {isLoggedIn && (
        <ul className={`nav-ul menu-list ${showMenu ? "show" : "none"}`}>
          <li className="nav-icon">
            <a href="/" className="nav-links">
              <i className="fa-solid fa-circle-user"></i>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
