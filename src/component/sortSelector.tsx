import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from '../hooks';
import { setGameQuery } from '../store/reducer'
import { useOutsideEvent } from "../hooks/useOutsideEvent";

const SortSelector = () => {
  const dispatch = useAppDispatch()
  const { gameQuery } = useAppSelector(state => state)

  const [toggleMenu, setToggleMenu] = useState(false);

  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ]

  const ref = useRef<HTMLUListElement>(null)
  const parent_ref = useRef<HTMLButtonElement>(null)

  const currentSortName = sortOrder.find(s => s.value === gameQuery.sortOrder)

  const handleClick = () => {
    setToggleMenu(false);
  }

  useOutsideEvent<HTMLUListElement, HTMLButtonElement>(ref, handleClick, parent_ref)

  return (
    <div>
      <div className="relative w-48 mt-2 ms-4">
        <button
          ref={parent_ref}
          type="button"
          className="relative w-full cursor-pointer rounded-md bg-gray-50 text-gray-700 dark:bg-gray-700 py-1.5 pl-3 pr-10 text-left dark:text-gray-50 shadow-sm ring-1 ring-inset ring-gray-50 dark:ring-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="flex items-center">
            <span className="block ml-3 truncate">
              <span className="text-gray-400">Order By:</span> {currentSortName?.label || "Relevance"}
            </span>
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {toggleMenu && (
          <ul
            ref={ref}
            className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg scroll-smooth bg-gray-50 dark:bg-gray-700 max-h-56 ring-1 ring-gray-50 dark:ring-gray-600 ring-opacity-5 focus:outline-none sm:text-sm scrollbar"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {sortOrder.map((sort) => {
              return (
                <li
                  key={sort.value}
                  className="relative py-2 pl-3 text-gray-700 cursor-default select-none dark:text-gray-50 pr-9 hover:bg-cyan-400/10"
                  id="listbox-option-0"
                  role="option"
                  onClick={() => {
                    dispatch(setGameQuery({ type: 'SORTING', sortOrder: sort.value }))
                    setToggleMenu(!toggleMenu)
                }}
                >
                  <div className="flex items-center">
                    <span className="block ml-3 font-normal truncate">
                      {sort.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortSelector;