import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="w-12 h-12 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <span className="ml-2 text-red-500">Data failed to load.</span>
    </div>
  );
};
export default Error;
