import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <h2 className="login__title">login</h2>
          <form action="" className="login__form">
            <label className="login__form-label">
              Email
              <input
                type="email"
                name="email"
                className="login__form-input"
                placeholder="Your email"
                required
              />
            </label>
            <label className="login__form-label">
              Password
              <input
                type="password"
                name="password"
                className="login__form-input"
                placeholder="Your password"
                required
              />
            </label>

            <button className="login__btn">Login</button>
          </form>
          <Link to="register" className="login__btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
