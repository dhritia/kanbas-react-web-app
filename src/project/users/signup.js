import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="w-25">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username} className="form-control m-2"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
        value={credentials.password} className="form-control m-2"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={signup}  className="btn btn-primary m-2">
        Signup
      </button>
    </div>
  );
}
export default Signup;