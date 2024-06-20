import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { toast } from "react-hot-toast";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = () => {
    googleLogin()
      .then((data) => {
        if (data?.uid) {
          const userInfo = {
            email: data?.email,
            name: data?.displayName,
            uid: data?.uid,
            photoURL: data?.photoURL,
          };
          axios
            .post("https://toritorkari-server.vercel.app/user", userInfo, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              console.log("Google login success");
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.error("Error logging in with Google:", error);
              toast.error("Error logging in with Google:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        toast.error("Error signing in with Google:", error);
      });
  };

  return (
    <div>
      <button onClick={handleSubmit} className="btn w-full">
        <div className="flex items-center gap-2">
          <FcGoogle size={24} />
          <p>Google</p>
        </div>
      </button>
    </div>
  );
};

export default GoogleLogin;
