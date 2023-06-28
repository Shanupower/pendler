import { NavLink } from "react-router-dom";
import logo from "../../assets/logoText.png";
import { useState } from "react";

const NavbarHome = () => {
    const [fix, setFix] = useState(false)
    
    const setFixed = () => {
        if(window.scrollY >= 730) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)

  return (
    <div className={fix ? `bg-slate-900 shadow-xl max-w-[1450px] fixed top-0 rounded-3xl w-full z-50` : `bg-slate-900 shadow-xl max-w-[1450px] rounded-3xl w-full z-50`}>
      <div className="navbar">
        <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
          <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/drivers"
              >
                Drivers
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/users"
              >
                Users
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/our-story"
              >
                Our Story
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary" : "hover:border-b-4 border-primary"
                }
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-36 -mt-10" src={logo} alt="" />
        </a>
      </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2 lg:gap-5 lg:space-x-8 px-1 lg:px-3 text-xl font-medium text-base-100">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/drivers"
              >
                Drivers
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/users"
              >
                Users
              </NavLink>
            </li>
            {/* <li className="hover:border-b-4 border-primary pb-1">
              <a className="" href="#articles">Articles</a>
            </li> */}
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-4 border-primary pb-1" : "hover:border-b-4 border-primary pb-1"
                }
                to="/our-story"
              >
                Our Story
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
