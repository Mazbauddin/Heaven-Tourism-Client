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
  // synthwave
  return (
    <div className="max-w-[1920px] mx-auto ">
      <header className="shadow-lg h-20 flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
        <Link to="/" className="flex flex-shrink-0 items-center">
          <svg
            id="logo-33"
            width="50"
            height="46"
            viewBox="0 0 60 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.6046 3.72414C25.1108 2.23101 22.6895 2.2315 21.1964 3.72525L8.73506 16.1917L8.72444 16.1886L8.68506 16.1928C8.70128 16.2006 8.7172 16.2083 8.7328 16.2161C6.54682 16.4451 5.61934 17.102 5.60884 17.9456C5.61254 18.2594 5.74129 18.5983 5.97778 18.9501L5.96641 18.9615C7.95369 21.9588 17.7986 25.9127 24.7636 23.2338C19.5436 25.8438 7.25026 26.3611 3.63951 21.2935C2.85537 22.1418 2.52729 23.2566 2.65084 24.3279C3.6047 29.5853 14.2689 31.0196 24.9332 23.4023L27.2409 25.71C24.3693 28.6602 20.1276 45.7967 26.4303 43.1803C26.5798 43.0788 26.7067 42.988 26.8793 42.8574L27.1602 42.5922C27.144 42.5962 27.1279 42.6 27.1119 42.6038L43.9919 26.6681C45.5592 25.1884 45.5947 22.7065 44.0702 21.1826L26.6046 3.72414ZM24.7664 8.91743L25.3433 6.60974L25.9202 8.91743L27.651 9.49436L25.9202 10.0713L25.3433 12.379L24.7664 10.0713L23.0356 9.49436L24.7664 8.91743ZM17.6255 16.4508L18.0101 14.9123L18.3947 16.4508L19.5486 16.8354L18.3947 17.22L18.0101 18.7585L17.6255 17.22L16.4717 16.8354L17.6255 16.4508ZM31.0211 29.4277L30.6365 30.9661L29.4827 31.3508L30.6365 31.7354L31.0211 33.2738L31.4057 31.7354L32.5596 31.3508L31.4057 30.9661L31.0211 29.4277Z"
              class="ccustom"
              fill="#4845D2"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.2918 5.25128C41.6831 5.25128 38.2608 6.85419 35.9505 9.62649L27.7315 19.4894L32.4775 12.3703L24.5995 15.7466C23.599 16.1754 23.348 17.4789 24.1176 18.2486L26.6528 20.7837L25.3584 22.337L28.2061 25.1846L29.7593 23.8902L32.2945 26.4254C33.0641 27.195 34.3677 26.944 34.7964 25.9436L38.1727 18.0656L31.0537 22.8116L40.9166 14.5925C43.6889 12.2823 45.2918 8.86 45.2918 5.25128ZM37.4609 13.0824C38.2472 13.8687 39.5221 13.8687 40.3085 13.0824C41.0948 12.296 41.0948 11.0211 40.3085 10.2348C39.5221 9.44841 38.2472 9.44841 37.4609 10.2348C36.6745 11.0211 36.6745 12.296 37.4609 13.0824Z"
              class="ccompli2"
              fill="#A3A2FF"
            ></path>{" "}
            <path
              opacity="0.6"
              d="M3.54793 21.1609C5.43339 27.6207 16.8966 27.2839 24.7614 23.2348C19.495 25.8664 7.03695 26.369 3.54793 21.1609Z"
              fill="#424242"
            ></path>{" "}
            <path
              opacity="0.6"
              d="M26.4303 43.1803C21.1195 45.3849 23.2955 33.5645 25.8299 28.0245C23.9825 32.9487 22.4055 43.8038 27.1602 42.5922L26.8793 42.8574C26.7067 42.988 26.5798 43.0788 26.4303 43.1803Z"
              fill="#424242"
            ></path>{" "}
          </svg>
          <a className="text-2xl font-bold text-orange-500">Heaven</a>
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
          <div className="flex justify-between items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
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
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
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
          className="text-4xl text-[#FF497C] relative flex items-center  justify-end w-full md:w-auto md:hidden ml-3"
        >
          {isOpen ? (
            <IoCloseSharp className="text-2xl text-red-500" />
          ) : (
            <FaHamburger className="text-2xl text-red-500" />
          )}
        </button>
      </header>

      {/* Side Menu */}
      <div
        className={` ${
          isOpen ? "top-20" : "top-[-490px]"
        } absolute md:hidden  bg-black shadow-lg  w-56 overflow-y-auto top-0 left-0 transition-all duration-1000 ease-in dark:bg-[#120505] dark:text-white z-50`}
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
