import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdInsertEmoticon } from "react-icons/md";
import Swal from "sweetalert2";
const Navbar = () => {
  const { LogOut, user } = useContext(AuthContext);

  // console.log(user);
  const handleLogout = () => {
    LogOut()
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "logOut successful",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(result.user);

      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/profile"> Update Profile</NavLink>
        </li>
      )}

      {user && (
        <span className="flex">
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </span>
      )}
    </>
  );
  return (
    <div className="navbar bg-gray-800 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Our{" "}
          <span className="text-blue-600 animate__animated animate__bounce">
            Homefinder
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks} </ul>
      </div>
      <div className="navbar-end gap-2">
        <span>{user && user.email}</span>
        {user && user.displayName}

        {user && (
          <span>
            <a>
              <img
                className="rounded-full w-9 ml-4"
                src={
                  user.photoURL ? (
                    user.photoURL
                  ) : (
                    <MdInsertEmoticon></MdInsertEmoticon>
                  )
                }
              />
            </a>
          </span>
        )}
        {user ? (
          <Link>
            <button onClick={handleLogout} className="btn ml-4">
              Sign Out
            </button>
          </Link>
        ) : (
          <Link to={"/login"} className="btn">
            User Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
