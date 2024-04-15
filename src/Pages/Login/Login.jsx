import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "LogIn successful",
          showConfirmButton: false,
          timer: 2000,
        });

        setSuccess("LogIn successful");

        //  navigate login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password or email address!"
        });
       
        setError(error.massage);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-[calc(100vh-250px)]">
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold animate__animated animate__fadeInLeft  text-blue-800">
              Login now!
            </h1>
            <p className="py-6">
              please logIn Now .... Provident cupiditate voluptatem et in.
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* error */}
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Are You new ?{" "}
                <Link className="link-primary hover:link" to="/register">
                  Register
                </Link>
              </p>
            </form>
            <div className="flex gap-4 p-1">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-secondary  items-center"
              >
                <FaGoogle className=""></FaGoogle> google
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn btn-secondary  items-center"
              >
                <FaGithub className="font-bold"></FaGithub> Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
