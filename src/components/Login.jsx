// ─────────────────────────────────────────
//  Login.jsx  —  Auth gate
//  Props : onLogin() — called on success
// ─────────────────────────────────────────
import React, { useState } from "react";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isReady = username && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-overlay">
        <div className="login-card">
          <h2 className="mb-4">WMS Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button
              type="submit"
              disabled={!isReady}
              className="login-btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;