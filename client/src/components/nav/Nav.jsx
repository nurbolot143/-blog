import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Nav() {
  const user = false;

  return (
    <div className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <Link to="/" className="nav__logo">
              Blogger
            </Link>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/">About</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/">Contact</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/write">Write</Link>
              </li>
              <li className="nav__menu-item">{user && "Logout"}</li>
            </ul>
          </div>
          <div className="nav__right">
            {user ? (
              <AccountCircleIcon
                className="nav__user"
                style={{ fontSize: 40 }}
              />
            ) : (
              <ul className="nav__menu">
                <li className="nav__menu-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav__menu-item">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
