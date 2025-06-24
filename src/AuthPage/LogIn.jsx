import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginPic from "../assets/pic2.png";
import useAxiosPublic from "../useHooks/useAxiosPublic";
import useContextHook from "../useHooks/useContextHook";

const LogIn = () => {
  const navigate = useNavigate();
  const { signInUser } = useContextHook();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((res) => {
        console.log("users", res.user.email);
        const user = { email: email };
        axiosPublic
          .post("/jwt", user, { withCredentials: true }) //for cookies allow come from backend
          .then((res) => {
            console.log("token data is", res.data);
            toast.success("Your Login Successfully!");
            navigate("/home");
          });
      })
      .catch((error) => {
        console.error("Login failed:", error);
        toast.error("Login failed. Please check your credentials.");
      });
  };
  return (
    <section className="bg-white/10 w-full mx-auto shadow-md">
      <div className="flex justify-center min-h-screen ">
        <div
          className="hidden lg:block lg:max-w-4xl lg:flex items-center"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at top left,#60E5AE -5%,#040612 20%,transparent),
              radial-gradient(ellipse at bottom right, #60E5AE -60%, #040612 80%,transparent)`,
            backgroundBlendMode: "overlay",
          }}
        >
          <img src={loginPic} alt="" className="object-cover " />
        </div>

        <div className="flex items-center justify-center w-full p-4 mx-auto lg:px-12 lg:w-3/5">
          <div className="lg:w-4/6 w-full">
            <h1 className="text-3xl text-center font-semibold tracking-wider text-gray-800 capitalize ">
              Login
            </h1>

            <p className="mt-4 text-gray-500 text-center">
              Welcome Back, Please Entry your Details to Login
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-4 space-y-4 mt-8"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-800 ">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email address"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-white border border-gray-300 shadow-sm rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-green-600  focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                  placeholder="***********"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-white border border-gray-300 shadow-sm rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-green-600  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full btn bg-[#60E5AE] mt-10"
              >
                <span>Log In </span>
              </button>
            </form>
            <div className="flex w-full items-center justify-center">
              <div className="divider w-5/6 ">Or</div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-gray-500">Don't have an account?</p>
              <Link to="/register" className="font-bold">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
