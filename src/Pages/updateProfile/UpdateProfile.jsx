import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageTittle from "../../Components/PageTittle";
const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { image, name } = data;
    updateUserProfile(name, image).then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "profile update successful",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="min-h-[calc(100vh-250px)] ">
      <PageTittle title="Update profile"></PageTittle>
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold animate__animated animate__fadeInLeft  text-blue-800">
              Update now!
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">photoURL</span>
                  </label>
                  <input
                    type="photo"
                    placeholder="photoURL"
                    className="input input-bordered"
                    {...register("Name", { required: true })}
                  />
                  {errors.Name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
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
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
