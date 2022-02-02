import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./images/logo/logo1.png";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By creating the account you are Agree to Game-Commerce Conditions to
          use
        </p>

        <button className="login__registerButton">
          Create your Game-Commerce Account
        </button>
      </div>
    </div>
  );
}

export default Login;
