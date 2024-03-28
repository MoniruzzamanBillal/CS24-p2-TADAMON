import UserList from "../../Component/SystemAdmiin/UserList";

const ShowUsers = () => {
  return (
    <div className="ShowUsersContainer">
      <div className="ShowUsersWrapper w-[85%] py-8 m-auto flex flex-col gap-y-12 ">
        {/* search by user name input starts  */}
        <div className="searchByName  ">
          <input
            type="text"
            id="userName"
            placeholder=" Search by user name  "
            className={` block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
          />
        </div>
        {/* search by user name input ends  */}

        {/* filter by roles starts  */}
        <div className="filterByyRoleContainer ">
          <h1 className=" mb-2 text-lg font-medium ">filter by roles : </h1>

          <div className="inputContainer  flex flex-wrap gap-x-8 ">
            {/* all users input starts  */}
            <div className="allUserInput flex items-center gap-x-1   ">
              <input
                id="allUser"
                type="radio"
                value="allUser"
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />

              <label htmlFor="allUser">All users</label>
            </div>
            {/* all users input ends  */}

            {/* sts manager radio input starts  */}
            <div className="stsManagerInout flex items-center gap-x-1  ">
              <input
                id="stsManager"
                type="radio"
                value="stsManager"
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />

              <label htmlFor="stsManager">Sts manager</label>
            </div>
            {/* sts manager radio input ends  */}

            {/* landfil manager input starts  */}
            <div className="landfilManagerInout  flex items-center gap-x-1  ">
              <input
                id="landfilManager"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />

              <label htmlFor="landfilManager">landfil manager</label>
            </div>
            {/* landfil manager input ends  */}
          </div>
        </div>
        {/* filter by roles ends  */}

        {/* user list container starts  */}
        <div className="userList   ">
          <h1 className=" text-xl font-medium mb-4  ">User List : </h1>

          {/* user container starts */}
          <div className="userContainer   ">
            <UserList />
          </div>
          {/* user container ends */}
        </div>
        {/* user list container ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ShowUsers;
