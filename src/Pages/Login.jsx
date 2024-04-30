import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaKey } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthHooks from "../Hooks/UseAuthHooks";
import SocialLogin from "../Components/SocialLogin";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Login = () => {
  const { signInUser, setLoading } = useAuthHooks();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // handle register
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        setLoading(false);
        if (result.user) {
          navigate(from);
          toast.success("Login successful");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
      });
  };

  // visible
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="hero min-h-screen my-20">
        <div className="hero-content  flex-col-reverse  lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div
              className="text-center lg:text-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="box_login">
                <strong>
                  <div className="flex justify-center items-center ">
                    <FaKey className="text-[50px] " />
                  </div>
                  <h3 className="text-4xl">Login</h3>
                </strong>
                {/* form start */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        type={visible ? "text" : "password"}
                        className="grow"
                        placeholder="password"
                        {...register("password", { required: true })}
                      />

                      <div
                        className="text-xl cursor-pointer "
                        onClick={() => setVisible(!visible)}
                      >
                        {visible ? (
                          <FaEye className="text-[#ff691a]"></FaEye>
                        ) : (
                          <FaEyeSlash className="text-[#ff691a]"></FaEyeSlash>
                        )}
                      </div>
                    </label>
                    {errors.password && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6 p-0">
                    <button className="btn flex items-center my-anchor-element justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-[#ff691a] border-transparent border-2 hover:bg-transparent hover:border-[#ff691a] hover:text-[#ff691a] text-white">
                      Login
                      <Tooltip anchorSelect=".my-anchor-element" place="top">
                        Click me
                      </Tooltip>
                    </button>
                  </div>
                  <label className="label text-[#ff691a]">
                    New here?{" "}
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover text-[#ff691a] text-base my-anchor-element"
                    >
                      Create an account
                      <Tooltip anchorSelect=".my-anchor-element" place="top">
                        You are new Here Please Register
                      </Tooltip>
                    </Link>
                  </label>
                </form>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
    </>
  );
};

export default Login;
