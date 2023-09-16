import React from "react";

function Item() {
  return (
    <div className="flex items-center justify-center h-24 w-28 rounded bg-gray-50 dark:bg-white">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
  );
}

export default Item;
