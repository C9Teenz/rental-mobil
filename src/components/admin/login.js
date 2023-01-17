import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [to, setTo] = useState("");
  const name = "admin";
  const pass = "admin";

  const submitHandler = () => {
    if (username === name && password === pass) {
      setTo("/dasboard");
    } else {
      setTo("/admin");
    }
  };
  return (
    <div className="login">
      <h1 className="text-center">Admin!</h1>

      <form className="needs-validation">
        <div className="form-group was-validated">
          <label className="form-label" for="username">
            Username
          </label>
          <input
            className="form-control"
            type="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="invalid-feedback">
            Please enter your username address
          </div>
        </div>
        <div className="form-group was-validated">
          <label className="form-label" for="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="invalid-feedback">Please enter your password</div>
        </div>
        <div className="form-group form-check">
          <input className="form-check-input" type="checkbox" id="check" />
          <label className="form-check-label" for="check">
            Remember me
          </label>
        </div>
        <Link
          className="btn btn-success w-100"
          type="submit"
          to={to}
          onClick={() => submitHandler()}
        >
          Signin
        </Link>
      </form>
    </div>
  );
};

export default Login;
