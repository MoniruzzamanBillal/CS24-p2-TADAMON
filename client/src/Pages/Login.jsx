import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  // hooks:
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  //   functionality of login
  const handleLogin = (data) => {
    const userEmail = data?.email;
    const userPassword = data?.password;

    console.log(userEmail);
    console.log(userPassword);
  };

  return (
    <div className="loginContainer ">
      <div className="loginWrapper  h-screen bg-[url('https://i.ibb.co/6bsNLj8/hosting-login.jpg')] bgImage flex justify-center items-center  ">
        <div className="loginCard bg-white  shadow-2xl  py-9 px-4 w-[92%] xsm:w-[82%] sm:w-[72%] md:w-[64%] xmd:w-[55%] lg:w-[46%] rounded border border-gray-200    ">
          <h1 className="mb-5 text-xl font-bold text-center  headingFont sm:text-2xl xsm:font-semibold sm:font-medium sm:mb-6 md:mb-8 lg:mb-10">
            Login to your account{" "}
          </h1>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" w-[92%] xsm:w-[80%] sm:w-[76%] md:w-[72%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/* email input  */}
            <div className="emailInput">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-300     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter your email"
              />

              {errors?.email && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            {/* email input  */}

            {/* password input  */}
            <div className="passwordInput">
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="block w-full m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5 outline-none "
                placeholder="Enter your password"
              />
              {errors?.password && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            {/* password input  */}

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
            >
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          <div className="mt-4 text-sm text-center registerDivert sm:text-base md:text-lg ">
            <p>
              Don't have an account ?{" "}
              <span className="text-blue-500 logoFont">
                <Link to={"/register"}>Register here</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
