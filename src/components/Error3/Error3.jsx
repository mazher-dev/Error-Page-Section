import React from "react";

const Error3 = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404 - Page Not Found</title>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="text-center  bg-purple-700 p-20 mb-8">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <p className="text-2xl text-white mt-4">Oops! Page not found.</p>
        <p className="text-white mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-purple-600 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Go Home
        </a>
      </div>
    </>
  );
};

export default Error3;
