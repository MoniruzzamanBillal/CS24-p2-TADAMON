import { useEffect, useState } from "react";
import UserList from "../../Component/SystemAdmiin/UserList";
import UserRoleBtn from "../../Component/SystemAdmiin/UserRoleBtn";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";

const ShowUsers = () => {
  const { axiosPublicUrl } = UseAxiosPublic();
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const [users, setUsers] = useState([]);
  const [userRole, setUserRole] = useState([]);
  const [adminClick, setAdminCLick] = useState(false);
  const [stsClick, setStsCLick] = useState(false);
  const [landfilClick, setLandfilCLick] = useState(false);
  const [allClick, setAllCLick] = useState(false);

  // function for select user role
  const handleUserRole = (role) => {
    if (userRole.includes(role)) {
      setUserRole(userRole.filter((r) => r !== role));
    } else {
      setUserRole([...userRole, role]);
    }
  };

  // effect to get all users
  useEffect(() => {
    axiosPublicUrl
      .get("/api/users")
      .then((response) => {
        // console.log(response?.data);
        setUsers(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(users);

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

            <UserRoleBtn
              roleClick={allClick}
              setRoleClick={setAllCLick}
              handleUserRole={handleUserRole}
              value="allUser"
              title="All users"
            />

            {/* all users input ends  */}

            {/* admin role section starts  */}
            <UserRoleBtn
              roleClick={adminClick}
              setRoleClick={setAdminCLick}
              handleUserRole={handleUserRole}
              value="admin"
              title="Admin"
            />
            {/* admin role section ends  */}

            {/* sts manager radio input starts  */}
            {/* sts manager button starts  */}
            <UserRoleBtn
              roleClick={stsClick}
              setRoleClick={setStsCLick}
              handleUserRole={handleUserRole}
              value="stsManager"
              title="STS manager"
            />
            {/* sts manager button ends  */}
            {/* sts manager radio input ends  */}

            {/* landfil manager button starts  */}
            <UserRoleBtn
              roleClick={landfilClick}
              setRoleClick={setLandfilCLick}
              handleUserRole={handleUserRole}
              value="landfilManager"
              title="Landfil Manager"
            />
            {/* landfil manager button ends  */}
          </div>
        </div>
        {/* filter by roles ends  */}

        {/* user list container starts  */}
        <div className="userList   ">
          <h1 className=" text-xl font-medium mb-4  ">User List : </h1>

          {/* user container starts */}
          <div className="userContainer   ">
            {users &&
              users?.map((user, ind) => (
                <UserList user={user} ind={ind} key={ind} />
              ))}
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
