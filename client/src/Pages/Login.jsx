const Login = () => {
  return (
    <div className="loginCOntainer  bg-blue-50 h-screen flex justify-center items-center   ">
      <div className="loginWrapper bg-white w-[65%] shadow-md border border-gray-50 rounded-md  m-auto py-16 px-8  flex justify-between gap-x-5  ">
        {/* login left container starts  */}
        <div className="loginLeft  w-[50%] ">
          <div className="logoContainer  mb-2  w-14 h-14 ">
            <img
              src="https://i.ibb.co/Xbxh72V/download.png"
              alt=""
              className=" w-full h-full "
            />
          </div>

          <h1 className=" text-4xl mb-3   ">Sign in </h1>
          <h1 className=" text-xl  ">Use your account </h1>
        </div>
        {/* login left container ends  */}

        {/* login right starts  */}
        <div className="loginRight  w-[50%] flex flex-col justify-center ">
          {/* email input starts  */}
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md block w-full py-4 px-2.5 outline-none "
            placeholder="Email"
            required
          />

          {/* email input endss  */}

          <div className="bottomContainer  font-medium flex  items-center gap-x-6 justify-end mt-8  ">
            <h1 className=" text-blue-600 cursor-pointer hover:text-blue-700   ">
              Create account{" "}
            </h1>

            <button className=" py-1.5 px-5  text-gray-50 bg-blue-600 rounded-xl hover:bg-blue-700  ">
              Next
            </button>
          </div>
        </div>
        {/* login right ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Login;
