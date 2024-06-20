import { useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
    reset({
      name: user.name,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      photoURL: user.photoURL,
    });
  };

  const handleFormSubmit = async (formData) => {
    // Check if new password and confirm password match
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match.", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axios.patch(
        `https://toritorkari-server.vercel.app/user/${user.email}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        updateUserProfile({ ...user, ...formData, password: "" });
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
        <FaUserEdit />
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
            onSubmit={handleSubmit(handleFormSubmit)}
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
                {...register("name", { required: true })}
                defaultValue={user.displayName}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="oldPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                {...register("oldPassword")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.oldPassword && (
                <p className="text-red-500 mt-1">Old Password is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                {...register("newPassword")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.newPassword && (
                <p className="text-red-500 mt-1">New Password is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  validate: {
                    matchesNewPassword: (value) =>
                      value === getValues().newPassword ||
                      "Passwords do not match",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
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
                {...register("photoURL")}
                defaultValue={user.photoURL}
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
