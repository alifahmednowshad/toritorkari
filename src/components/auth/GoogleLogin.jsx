import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = () => {
    googleLogin()
      .then(() => {
        console.log("Google login success");
        navigate(from);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div>
  );
};

export default GoogleLogin;
