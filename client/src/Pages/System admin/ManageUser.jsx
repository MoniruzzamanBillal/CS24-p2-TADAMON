import { Link } from "react-router-dom";

const ManageUser = () => {
  return (
    <div className="ManageUserContainer   ">
      <div className="ManageUserWrapper  h-screen flex flex-col justify-center items-center gap-y-8  ">
        {/* create user button starts  */}
        <div className="createUser  ">
          <Link to={"/dashboard/adduser"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Create user{" "}
            </button>
          </Link>
        </div>

        {/* create user button ends  */}

        {/* user list button starts  */}
        <div className="userList bg-sky-200 ">
          <Link to={"/dashboard/showUser"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200 ">
              User list{" "}
            </button>
          </Link>
        </div>
        {/* user list button ends  */}
      </div>
    </div>
  );
};

export default ManageUser;
