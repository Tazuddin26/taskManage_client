import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signUpPic from "../assets/pic.png";
import useAxiosPublic from "../useHooks/useAxiosPublic";
import useContextHook from "../useHooks/useContextHook";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContextHook();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const formData = { ...data, createdAt: new Date() };
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        updateUserProfile(name)
          .then(() => {
            const userInfo = {
              name: data.fullName,
              email: data.email,
              uid: loggedUser.uid,
              createdAt: new Date(),
              // photoURL: photoURL,
            };
            // console.log("User profile updated successfully");

            const res = axiosPublic.post("/addUsers", userInfo);
            // console.log("added task data", res.data);
            reset();
            toast.success("User created successfully!");
            navigate("/home");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
            toast.error("Failed to update user profile!");
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to create user!");
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
          <img src={signUpPic} alt="" className="object-cover " />
        </div>

        <div className="flex items-center justify-center p-4 w-full mx-auto lg:px-12 lg:w-3/5">
          <div className="lg:w-4/6 w-full">
            <h1 className="text-3xl text-center font-semibold tracking-wider text-gray-800 capitalize ">
              Sign up
            </h1>

            <p className="mt-4 text-gray-500 text-center">
              To Create Account, Please Fill in the From Below.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-4 space-y-4 mt-8"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-800 ">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  {...register("fullName", { required: true })}
                  placeholder="Enter your full name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-white border border-gray-300 shadow-sm rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
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

              <div>
                <label className="block mb-2 text-sm text-gray-800 ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPass"
                  {...register("confirmPass", { required: true })}
                  placeholder="Retype password"
                  required
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-white border border-gray-300 shadow-sm rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-green-600  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full btn bg-[#60E5AE] mt-10"
              >
                <span>Sign up </span>
              </button>
            </form>
            <div className="flex w-full items-center justify-center">
              <div className="divider w-5/6 ">Or</div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-gray-500">Already have an account?</p>
              <Link to="/" className="font-bold">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
