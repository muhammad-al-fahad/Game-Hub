import { FormEvent, useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setGameQuery } from "../store/reducer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { setToggle } from "../store/reducer/toggle"
import Search from "./search";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { showNav } = useAppSelector((state) => state);

  const navigate = useNavigate();
  const [theme, setTheme] = useState<string>("light");
  const ref = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation()

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
  }, []);

  useEffect(() => {
    const darkMode = localStorage.getItem("theme");

    if (darkMode === "light") {
      document.documentElement.classList.add(darkMode);
      document.documentElement.classList.remove("dark");
    } else if (darkMode === "dark") {
      document.documentElement.classList.add(darkMode);
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (ref.current) {
      dispatch(setGameQuery({ type: "SEARCH", searchText: ref.current.value }));
      dispatch(setToggle({ type: "TOGGLE", navSearch: false, navMenu: false }))
      ref.current.value = "";
      navigate("/");
    }
  };
  
  return (
    <>
      <nav className="px-2 max-w-screen sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex space-x-6 no-underline cursor-pointer">
            <img src={Logo} alt="" width={50} height={50} />
            <h3 className="hidden text-2xl text-black xs:block dark:text-white">Navbar</h3>
          </Link>

          <form className="hidden max-w-md mx-auto lg:block" onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-400 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                ref={ref}
                type="search"
                className="block w-48 px-4 py-2 text-sm text-gray-700 border border-gray-100 rounded-lg outline-none md:w-96 bg-gray-50 ps-10 ring-2 ring-gray-100 dark:ring-gray-600 focus:ring-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-50"
                placeholder="Search Games..."
              />
            </div>
          </form>

          <div className="flex items-center space-x-4 2xs:space-x-8">
          <div className="relative block p-3 border-2 rounded-full cursor-pointer border-cyan-500 bg-cyan-500 lg:hidden" onClick={() => dispatch(setToggle({ type: "TOGGLE", navSearch: !showNav.search, navMenu: false }))}>
            <svg
              className="w-4 h-4 text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          {theme === "light" ? (
            <FaSun
              className="text-3xl cursor-pointer text-cyan-500"
              onClick={handleTheme}
            />
          ) : (
            <FaMoon
              className="text-3xl cursor-pointer dark:text-cyan-500"
              onClick={handleTheme}
            />
          )}

          <span 
            className={`relative ${ pathname === '/' ? 'block' : 'hidden' } w-8 h-1 cursor-pointer bg-cyan-500 sm:ms-4 md:ms-8 lg:hidden before:absolute before:-top-2 before:h-1 before:w-8 before:bg-cyan-500 after:h-1 after:w-8 after:top-2 after:absolute after:bg-cyan-500 ${showNav.menu && 'bg-transparent before:rotate-45 after:-rotate-45 before:transition-all before:ease before:duration-300 after:transition-all after:ease after:duration-300 before:translate-y-2 after:-translate-y-2'}`} 
            onClick={() => dispatch(setToggle({ type: 'TOGGLE', navMenu: !showNav.menu, navSearch: false }))}
          ></span>
          </div>
        </div>
      </nav>

      <Search />
    </>
  );
};

export default Navbar;
