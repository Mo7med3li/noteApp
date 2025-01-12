import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../context/User.context";

export default function Navbar() {
  let { token, logOut } = useContext(userContext);
  return (
    <>
      <nav className="bg-primary py-5">
        <div className="container flex justify-between items-center ">
          <div className="font-bold text-5xl">
            <Link to="/">
              <i className="fa-regular fa-note-sticky mr-2"></i>
              Notes
            </Link>
          </div>
          <div className="space-x-8">
            {token && (
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `before:absolute relative before:w-0  hover:before:w-full before:duration-300 before:transition-[width] before:h-0.5 before:bg-black before:left-0 before:-bottom-1 text-2xl ${
                    isActive ? "before:!w-full font-bold" : ""
                  }`;
                }}
              >
                Home
              </NavLink>
            )}
            {!token && (
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return `before:absolute relative before:w-0  hover:before:w-full before:duration-300 before:transition-[width] before:h-0.5 before:bg-black before:left-0 before:-bottom-1  text-2xl ${
                    isActive ? "before:!w-full font-bold" : ""
                  }`;
                }}
              >
                Login
              </NavLink>
            )}
            {!token && (
              <NavLink
                to="/signup"
                className={({ isActive }) => {
                  return `before:absolute relative before:w-0  hover:before:w-full before:duration-300 before:transition-[width] before:h-0.5 before:bg-black before:left-0 before:-bottom-1 text-2xl ${
                    isActive ? "before:!w-full font-bold" : ""
                  }`;
                }}
              >
                Signup
              </NavLink>
            )}
            {token && (
              <Link
                onClick={logOut}
                className={`before:absolute relative before:w-0  hover:before:w-full before:duration-300 before:transition-[width] before:h-0.5 before:bg-black before:left-0 before:-bottom-1 text-2xl `}
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
