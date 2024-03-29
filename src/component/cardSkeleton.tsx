const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-[377.875] min-h-max overflow-hidden rounded-lg shadow-lg animate-pulse dark:bg-gray-700 bg-gray-50"
    >
      <div className="flex items-center justify-center w-full h-64 bg-gray-100 dark:bg-gray-600">
        <svg
          className="object-cover object-center text-gray-400 dark:text-gray-100 max-w-24 max-h-24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full px-2 py-4">
        <div className="h-2 bg-gray-400 rounded-full max-w-48 mb-2.5"></div>
        <br />
        <div className="h-1.5 bg-gray-400 rounded-full max-w-full mb-2.5"></div>
        <div className="h-1.5 bg-gray-400 rounded-full max-w-full mb-2.5"></div>
        <div className="h-1.5 bg-gray-400 rounded-full max-w-72"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
