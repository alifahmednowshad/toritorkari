import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result;
        console.log(user.photoURL);
        updateUserProfile(data.name, user.photoURL, user.uid).then(() => {
          const saveUser = {
            name: data.name,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
          };
          console.log(saveUser);
          axios
            .post("https://toritorkari-server.vercel.app/user", saveUser)
            .then((res) => {
              console.log(res); // Log the response data if needed
              if (res.data.token) {
                reset();
                toast.success("User Created Successfully.", {
                  position: "top-center",
                });
                navigate(from, { replace: true });
              }
            })
            .catch((error) => {
              console.error("Error creating user:", error);
              const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Failed to create an account. Please check your input and try again.";

              setError(errorMessage);
              toast.error(errorMessage, { position: "top-center" });
            });
        });
        verifyEmail(); // Ensure this function is defined and handles email verification
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to create an account. Please check your input and try again.";

        setError(errorMessage);
        toast.error(errorMessage, { position: "top-center" });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-2 w-full mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shadow-2xl bg-base-100 max-w-lg">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Register</button>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-orange-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="w-full">
            <div className="flex flex-col gap-2 mx-7 mb-7">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
