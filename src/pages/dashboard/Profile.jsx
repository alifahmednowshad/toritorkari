import { useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    password: "",
    photoURL: user?.photoURL || "",
  });

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.patch(
        `http://localhost:5000/user/${user.email}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUser({ ...user, ...formData });
        toast.success("Profile updated successfully.", {
          position: "center",
        });
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-xl rounded-lg max-w-lg relative">
      <button
        onClick={handleEdit}
        className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12h.01M12 12h.01M9 12h.01M21 12.5a9.97 9.97 0 00-.42-2.47l-2.83 2.83a4.002 4.002 0 01-4.48.47l-3.59-3.59a4.002 4.002 0 01-.47-4.48l2.83-2.83A9.97 9.97 0 0012.5 3c-2.75 0-5.22 1.12-7.07 2.93C3.12 8.28 2 10.75 2 13.5S3.12 18.72 4.93 20.57C6.78 22.43 9.25 23.55 12 23.55s5.22-1.12 7.07-2.93A9.974 9.974 0 0021 12.5z"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xl text-gray-600">No Photo</span>
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            {user.displayName || "N/A"}
          </h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>
        <div className="w-full border-t border-gray-300 pt-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between text-gray-800">
              <span className="font-semibold">UID:</span>
              <span>{user.uid}</span>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
          >
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label
                htmlFor="displayName"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-gray-700 font-bold mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
