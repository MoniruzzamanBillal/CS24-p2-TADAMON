import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserRoleBtn from "../../Component/SystemAdmiin/UserRoleBtn";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const AddUser = () => {
  const { axiosPublicUrl } = UseAxiosPublic();
  const [userRole, setUserRole] = useState([]);
  const [adminClick, setAdminCLick] = useState(false);
  const [stsClick, setStsCLick] = useState(false);
  const [landfilClick, setLandfilCLick] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  //   function for adding user
  const handleAddUser = (data) => {
    const userName = data?.userName;
    const userEmail = data?.userEmail;
    const userPassword = data?.userPassword;

    // console.log(userName);
    // console.log(userPassword);
    // console.log(userRole);
    const userData = {
      email: userEmail,
      username: userName,
      password: userPassword,
      roles: userRole,
    };

    console.log(userEmail);
    console.log(userName);
    console.log(userPassword);
    // console.log(userData);

    axiosPublicUrl
      .post("/api/users", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));

    //
  };

  // function for select user role
  const handleUserRole = (role) => {
    if (userRole.includes(role)) {
      setUserRole(userRole.filter((r) => r !== role));
    } else {
      setUserRole([...userRole, role]);
    }
  };

  return (
    <div className="addUserContainer   ">
      <div className="addUserWrapper bg-gray-200  h-screen   flex justify-center items-center ">
        {/* add user card starts  */}
        <div className="addUserCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Create new user
          </h1>

          <form
            onSubmit={handleSubmit(handleAddUser)}
            className="  w-[92%]  sm:w-[88%] md:w-[84%] xmd:w-[80%] lg:w-[74%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/* user name input starts  */}
            <div className="userNameinput">
              <input
                type="text"
                id="userName"
                {...register("userName", {
                  required: "user name is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter user name"
              />

              {errors?.userName && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.userName?.message}
                </p>
              )}
            </div>
            {/*  user name input ends   */}

            {/* user email input starts  */}
            <div className="userInputinput">
              <input
                type="text"
                id="userEmail"
                {...register("userEmail", {
                  required: "user email is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter user name"
              />

              {errors?.userEmail && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.userEmail?.message}
                </p>
              )}
            </div>
            {/* user email input ends  */}

            {/* user password input starts  */}
            <div className="userPassword">
              <input
                type="password"
                id="userPassword"
                {...register("userPassword", {
                  required: " password is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter user password"
              />

              {errors?.userPassword && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.userPassword?.message}
                </p>
              )}
            </div>
            {/* user password input ends  */}

            {/* retype new password starts  */}
            <div className="confirmPassword">
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: " confirm password is required",
                  validate: (value) =>
                    value === getValues("userPassword") ||
                    "The passwords do not match",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="confirm password"
              />

              {errors?.confirmPassword && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.confirmPassword?.message}
                </p>
              )}
            </div>
            {/* retype new password ends  */}

            {/* user role section starts  */}
            <div className="userRoleSection flex flex-wrap items-center gap-x-8  ">
              {/* user role button starts  */}
              {/* admin role section starts  */}
              <UserRoleBtn
                roleClick={adminClick}
                setRoleClick={setAdminCLick}
                handleUserRole={handleUserRole}
                value="admin"
                title="Admin"
              />
              {/* admin role section ends  */}

              {/* sts manager button starts  */}
              <UserRoleBtn
                roleClick={stsClick}
                setRoleClick={setStsCLick}
                handleUserRole={handleUserRole}
                value="stsManager"
                title="STS manager"
              />
              {/* sts manager button ends  */}

              {/* landfil manager button starts  */}
              <UserRoleBtn
                roleClick={landfilClick}
                setRoleClick={setLandfilCLick}
                handleUserRole={handleUserRole}
                value="landfilManager"
                title="Landfil Manager"
              />
              {/* landfil manager button ends  */}

              {/* user role button ends   */}
            </div>
            {/* user role section ends  */}

            <div className="buttonSection  flex justify-between items-center  ">
              <h1
                className=" btnClass bg-red-400 inline-block text-gray-50 font-medium cursor-pointer hover:bg-red-500 hover:scale-105 active:scale-100 duration-200   "
                onClick={() => navigate(-1)}
              >
                Go back{" "}
              </h1>
              {/* add user button starts  */}

              <button
                disabled={isSubmitting}
                className="flex items-center justify-center px-5 py-1.5  font-medium rounded-md  bg-sky-500 hover:bg-sky-600 text-gray-50 hover:scale-105 active:scale-100 duration-200  "
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
                  "Add User"
                )}
              </button>
              {/* add user button ends */}
            </div>
          </form>
        </div>
        {/* add user card ends  */}
      </div>
    </div>
  );
};

export default AddUser;
