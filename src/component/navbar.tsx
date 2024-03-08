import { FormEvent, useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useAppDispatch } from '../hooks'
import { setGameQuery } from '../store/reducer'

const Navbar = () => {
  const dispatch = useAppDispatch()

  const [theme, setTheme] = useState("light");
  const ref = useRef<HTMLInputElement>(null)

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
    event.preventDefault()

    if(ref.current) {
      dispatch(setGameQuery({ type: 'SEARCH', searchText: ref.current.value }))
      ref.current.value = ''
    }
  }
  return (
    <nav className="px-2 max-w-screen sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex space-x-6 cursor-pointer">
          <img src={Logo} alt="" className="" width={50} height={50} />
          <h3 className="text-2xl text-black dark:text-white">Navbar</h3>
        </div>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
                id="search-icon"
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
              id="default-search"
              className="block w-48 px-4 py-2 text-sm text-gray-700 border border-gray-100 rounded-lg outline-none md:w-96 bg-gray-50 ps-10 ring-2 ring-gray-100 dark:ring-gray-600 focus:ring-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-50"
              placeholder="Search Games..."
            />
          </div>
        </form>

        {theme === "light" ? (
          <FaSun className="text-3xl cursor-pointer text-cyan-500" onClick={handleTheme} />
        ) : (
          <FaMoon
            className="text-3xl cursor-pointer dark:text-cyan-500"
            onClick={handleTheme}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
