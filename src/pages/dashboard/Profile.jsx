import LoadingSpinner from "../../components/shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-xl rounded-lg max-w-lg">
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
    </div>
  );
};

export default Profile;
