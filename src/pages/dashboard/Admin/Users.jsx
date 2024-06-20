import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import { useLocation, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const currentUserId = localStorage.getItem("uid");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/user");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users.", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleMakeAdmin = (userId) => {
    axios
      .patch(
        `http://localhost:5000/user/admin/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.modifiedCount) {
          fetchUsers();
          toast.success("Make Admin Successful.", {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error);
        toast.error("Failed to make admin.", {
          position: "top-center",
        });
      });
  };

  const handleDeleteUser = (uid) => {
    axios
      .delete(`http://localhost:5000/user/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        fetchUsers();
        toast.success("Deleted Successfully.", {
          position: "top-center",
        });
        // If the current user deletes their own account and no users left, navigate to home page
        if (uid === currentUserId && users.length === 1) {
          navigate(from);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete user.", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl text-center font-bold">All Users</h2>
      {isLoading && (
        <p>
          <LoadingSpinner /> Loading...
        </p>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-md overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-3 text-left">#</th>
              <th className="py-2 px-3 text-left">Name</th>
              <th className="py-2 px-3 text-left">Email</th>
              <th className="py-2 px-3 text-left">Admin</th>
              <th className="py-2 px-3 text-left">Delete User</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((singleUser, i) => (
              <tr key={singleUser._id}>
                <td className="py-3 px-3">{i + 1}</td>
                <td className="py-3 px-3">{singleUser.name}</td>
                <td className="py-3 px-3">{singleUser.email}</td>
                <td className="py-3 px-3">
                  {singleUser?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(singleUser._id.toString())}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <p>Already Admin</p>
                  )}
                </td>
                <td className="py-3 px-3">
                  <button
                    onClick={() => handleDeleteUser(singleUser.uid)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="center" />
    </div>
  );
};

export default Users;
