import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const createdUser = await createUser(email, password);
      if (createdUser) {
        const userInfo = { email: createdUser.email, name: name };
        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        });

        if (response.ok) {
          toast.success("Registration successful!");
          navigate(from);
        } else {
          const result = await response.json();
          console.error("Failed to save user information:", result);
          setError("Failed to save user information.");
        }
      }
    } catch (err) {
      console.error("Error creating user:", err);
      setError(
        "Failed to create an account. Please check your input and try again."
      );
    }
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
          <form onSubmit={handleSubmit} className="card-body">
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
                required
              />
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
                required
              />
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
                required
              />
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
