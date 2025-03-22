import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

interface NavProps {
  isLoggedIn: boolean;
}

export default function Nav(props: NavProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  console.log(showMenu);

  return (
    <nav>
      <div className="page-component-padding nav">
        <ul className="nav-ul nav-list">
          <li>
            <Link to="/" className="page-btn-links home">
              Logo.
            </Link>
          </li>
          <li className="nav-icon menu-icon">
            <i
              className={`fa-solid ${
                showMenu ? "fa-bars-staggered" : "fa-bars"
              }`}
              onClick={toggleMenu}
            ></i>
          </li>
        </ul>
        {!props.isLoggedIn && (
          <ul className={`nav-ul menu-list ${showMenu ? "show" : "none"}`}>
            <li>
              <Link to={"/login"} className="page-btn-links">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/signup"} className="page-btn-links">
                Sign Up
              </Link>
            </li>
          </ul>
        )}
        {props.isLoggedIn && (
          <ul className={`nav-ul menu-list ${showMenu ? "show" : "none"}`}>
            <li className="nav-icon">
              <Link to={"/account"} className="page-btn-links account">
                <i className="fa-solid fa-circle-user"></i>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
