import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/Signin");
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input className="form-control m-2" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input className="form-control m-2" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input className="form-control m-2" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input type="date" className="form-control m-2" defaultValue={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input className="form-control m-2" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select className="form-select m-2" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100 m-2" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger w-100 m-2" onClick={signout}>
            Signout
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100 m-2">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;