import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-input"
        />
        <label className="form-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-input"
        />
        <button type="submit" className="form-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Auth;
