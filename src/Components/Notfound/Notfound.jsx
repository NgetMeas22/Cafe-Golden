import React from 'react'

import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>

      <Link
        to="/"
        className="mt-6 bg-red-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-transform duration-300 hover:scale-110"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Notfound;
