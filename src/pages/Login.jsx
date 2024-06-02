import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../components/auth/GoogleLogin";
import Modal from "../components/shared/Modal";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        if (user) {
          setIsModalVisible(true);
          setTimeout(() => {
            setIsModalVisible(false);
            navigate(from);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error sign in:", error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <img src="" alt="" />
          </div>
          <div className="flex justify-end">
            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
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

      {/* Modal */}
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title="Login Successful"
      >
        <p>You have successfully logged in!</p>
      </Modal>
    </div>
  );
};

export default Login;
