import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import Swal from "sweetalert2";
import PageTittle from "../../Components/PageTittle";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

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
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have an lowerCase letter in the password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 2000
        });
        setSuccess("User created successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.massage);
      });
  };

  return (
    <div className="min-h-[calc(100vh-250px)]">
      <PageTittle title={"Register page"}></PageTittle>
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold animate__animated animate__bounce text-blue-800">
              Register now!
            </h1>
            <p className="py-6">
              Register Now ! Are you new user ? If you new user then please
              register .
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("Name", { required: true })}
                />
                {errors.Name && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
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
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="img Url"
                  className="input input-bordered"
                  {...register("photo", { required: false })}
                />
                {errors.photo && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <span>
                    <span
                      className="absolute top-2 right-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <BsEyeSlashFill className="text-2xl"></BsEyeSlashFill>
                      ) : (
                        <IoEye className="text-2xl"></IoEye>
                      )}{" "}
                    </span>
                  </span>
                  {errors.password && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
                
                {/* <Toaster /> */}
                {/* error */}
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
              </div>
              <p>
                Already Register ?{" "}
                <Link className="link-primary hover:link" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
