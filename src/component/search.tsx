import { FormEvent, useRef } from "react"
import { useAppSelector, useAppDispatch } from "../hooks"
import { useNavigate } from "react-router-dom";
import { setGameQuery } from "../store/reducer";
import { setToggle } from "../store/reducer/toggle";

const Search = () => {
    const { showNav } = useAppSelector((state) => state)
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
  
      if (ref.current) {
        navigate("/");
        dispatch(setGameQuery({ type: "SEARCH", searchText: ref.current.value }));
        dispatch(setToggle({ type: "TOGGLE", navSearch: false, navMenu: false }))
        ref.current.value = "";
      }
    };

  return (
    <form className={`${showNav.search ? 'translate-y-0 transition-transform duration-500 ease-in-out' : '-translate-y-96 transition-transform duration-500 ease-in-out'} fixed left-0 flex items-center justify-center w-full py-8 mx-auto bg-white dark:bg-slate-800 top-16`} onSubmit={handleSubmit}>
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
        className="block w-64 px-4 py-2 text-sm text-gray-700 border border-gray-100 rounded-lg outline-none sm:w-96 bg-gray-50 ps-10 ring-2 ring-gray-100 dark:ring-gray-600 focus:ring-blue-500 dark:focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-50"
        placeholder="Search Games..."
      />
    </div>
  </form>
  )
}

export default Search