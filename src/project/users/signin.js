import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/Account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input className="form-control m-2 w-25" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input type="password" className="form-control m-2 w-25" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary m-2" onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;