import React from "react";

function Login({ onLogin }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card p-4 shadow" style={{ width: "300px" }}>
        <h3 className="text-center mb-3">WMS Login</h3>

        <input className="form-control mb-3" placeholder="Username" />
        <input className="form-control mb-3" type="password" placeholder="Password" />

        <button className="btn btn-primary w-100" onClick={onLogin}>
          Login
        </button>
      </div>

    </div>
  );
}

export default Login;