import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div
        id="error-page"
        className="bg-white shadow-md rounded-lg p-8 text-center max-w-lg"
      >
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 mb-6">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
