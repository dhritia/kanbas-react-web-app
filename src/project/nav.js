import { Link, useLocation } from "react-router-dom";
function Nav() {
  const links = ["Home", "Search", "Signin", "Signup","Account"];

  const { pathname } = useLocation();
  return (
    <div className="list-group m-2">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
export default Nav;