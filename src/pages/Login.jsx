import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../components/auth/GoogleLogin";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        if (user) {
          toast.success("Login successful!", {
            position: "top-center",
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate(from);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error sign in:", error);
        toast.error("Login failed. Please check your credentials.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mt-5">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <img src="" alt="" />
          </div>
          <div className="flex justify-end">
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className={`input input-bordered ${
                      errors.email ? "input-error" : ""
                    }`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className={`input input-bordered ${
                      errors.password ? "input-error" : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <span className="text-xs text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p className="text-center">
                  Don&apos;t have any account?{" "}
                  <Link to={"/register"} className="text-orange-500">
                    Register
                  </Link>
                </p>
              </form>
              <div className="w-full">
                <div className="flex flex-col gap-2 mx-7 mb-7">
                  <GoogleLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
