import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="text-2xl text-green-600 font-bold " to={"/"}>
            Toritorkari
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li className="mr-1">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mr-1">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="mr-1">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mr-1">
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div className="flex items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img alt="User Avatar" src={user.photoURL} />
                    ) : (
                      <img
                        alt="Default Avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link className="btn btn-ghost text-xl" to={"/login"}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
