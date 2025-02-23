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
    <nav>
      <div className="page-component-padding nav">
        <ul className="nav-ul nav-list">
          <li>Logo.</li>
          <li className="nav-icon menu-icon">
            <i
              className={`fa-solid ${
                showMenu ? "fa-bars-staggered" : "fa-bars"
              }`}
              onClick={toggleMenu}
            ></i>
          </li>
        </ul>
        {!isLoggedIn && (
          <ul className={`nav-ul menu-list ${showMenu ? "show" : "none"}`}>
            <li>
              <a href="/" className="page-btn-links">
                Login
              </a>
            </li>
            <li>
              <a href="/" className="page-btn-links">
                Sign Up
              </a>
            </li>
          </ul>
        )}
        {isLoggedIn && (
          <ul className={`nav-ul menu-list ${showMenu ? "show" : "none"}`}>
            <li className="nav-icon">
              <a href="/" className="page-btn-links account">
                <i className="fa-solid fa-circle-user"></i>
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
