import { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthHooks from "../Hooks/UseAuthHooks";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, isSetOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const { user, logout } = useAuthHooks() || {};
  const handleLogout = () => {
    logout()
      .then((result) => toast.success("successfully Logout"))
      .catch((err) => toast.error(err));
    setUserOpen(false);
  };

  //   theme controller
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="max-w-[1920px] mx-auto ">
      <header className="shadow-lg h-20 flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
        <Link to="/" className="flex flex-shrink-0 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              fill="#F06225"
              d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
            ></path>
            <path
              fill="#F06225"
              d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            ></path>
          </svg>
          <a className="text-2xl font-bold text-[#ff691a] ml-3">Heaven</a>
        </Link>
        {/* middle */}
        <nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-orange-500">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addTouristSpot"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>Add Tourists Spot</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allTouristsSpot"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>All Tourists Spot</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>My Cart</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* End */}

        <div className="relative flex items-center  justify-end w-full md:w-auto pl-5 ">
          {/* theme controller */}
          <div className="flex justify-between items-center mr-10">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-white border-sky-400 [--tglbg:theme(colors.orange.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
            />
          </div>
          {user ? (
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="border-2 border-orange-500 rounded-full w-[40px]"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-full h-full rounded-full"
              />
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn_wave btn1 rounded-md"
            >
              Login
            </button>
          )}

          {/* user Menu */}
          <div
            className={`absolute text-center ${
              userOpen ? "block" : "hidden"
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-base-100 dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>

            <button
              onClick={() => handleLogout()}
              className="btn_wave btn1 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
        {/* Drawer */}
        <button
          onClick={() => isSetOpen(!isOpen)}
          className="text-4xl text-[#ff691a] relative flex items-center  justify-end w-full md:w-auto md:hidden ml-3"
        >
          {isOpen ? (
            <IoCloseSharp className="text-2xl text-[#ff691a]" />
          ) : (
            <FaHamburger className="text-2xl text-[#ff691a]" />
          )}
        </button>
      </header>

      {/* Side Menu */}
      <div
        className={` ${
          isOpen ? "top-20" : "top-[-490px]"
        } absolute md:hidden  bg-base-100 shadow-lg  w-56 overflow-y-auto top-0 left-0 transition-all duration-1000 ease-in dark:bg-[#120505] dark:text-white z-50`}
      >
        <div className="pb-4 pl-4">
          <ul className="mt-6 flex flex-col gap-4 ml-5">
            <li>
              <NavLink
                onClick={() => isSetOpen(!isOpen)}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => isSetOpen(!isOpen)}
                to="/addTouristSpot"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>Add Tourists Spot</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => isSetOpen(!isOpen)}
                to="/allTouristsSpot"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>All Tourists Spot</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => isSetOpen(!isOpen)}
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-500"
                    : "hover:text-[#0da5e9]"
                }
              >
                <span>My Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
