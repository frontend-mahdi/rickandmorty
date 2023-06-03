import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600">Oops! Page not found.</p>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/characters"
        className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};
export default NotFound;
