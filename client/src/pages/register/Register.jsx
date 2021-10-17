import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [usename, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        usename,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="register__wrapper">
          <h2 className="register__title">Register</h2>
          <form action="" className="register__form" onSubmit={handleSubmit}>
            <label className="register__form-label">
              Email
              <input
                type="email"
                name="email"
                className="register__form-input"
                placeholder="Your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="register__form-label">
              Username
              <input
                type="name"
                name="name"
                className="register__form-input"
                placeholder="Your username"
                required
                onChange={(e) => setUsename(e.target.value)}
              />
            </label>
            <label className="register__form-label">
              Password
              <input
                type="password"
                name="password"
                className="register__form-input"
                placeholder="Your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button className="register__btn" type="submit">
              Register
            </button>
          </form>
          <Link to="/login" className="register__btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
