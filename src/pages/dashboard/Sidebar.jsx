import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin(user?.email);
console.log(isAdmin)

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <Link to="/" className="p-2 mt-2 hover:bg-gray-700 rounded">
          Home
        </Link>
        <Link
          to="/dashboard/profile"
          className="p-2 mt-2 hover:bg-gray-700 rounded"
        >
          Profile
        </Link>

        {isAdmin ? (
          <>
            <Link
              to="/dashboard/users"
              className="p-2 mt-2 hover:bg-gray-700 rounded"
            >
              Users
            </Link>
            <Link
              to="/dashboard/addProduct"
              className="p-2 mt-2 hover:bg-gray-700 rounded"
            >
              Add Product
            </Link>
            <Link
              to="/dashboard/allManageProduct"
              className="p-2 mt-2 hover:bg-gray-700 rounded"
            >
              Manage Product
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full p-2 mt-2 bg-red-600 hover:bg-red-700 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
