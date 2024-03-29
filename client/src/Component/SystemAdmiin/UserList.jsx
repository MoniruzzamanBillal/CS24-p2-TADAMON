import { MdDelete, MdEdit } from "react-icons/md";

const UserList = () => {
  return (
    <div className="userListContainer  my-6 ">
      <div className="userContainer bg-gray-200 shadow-md py-2 px-5 border border-gray-200 rounded-md  w-[90%] sm:w-[86%] md:w-[82%] xmd:w-[72%] lg:w-[62%] xl:w-[55%]  text-2xl flex items-center justify-between    ">
        <h1>1. user name </h1>

        <div className="userIcon flex items-center gap-x-3 ">
          {/* edit icon  */}
          <div className="editIcon text-green-600 hover:text-green-700 font-medium border border-green-600 p-0.5 rounded-md ">
            <MdEdit className=" cursor-pointer " />
          </div>
          {/* edit icon  */}

          {/* delete icon  */}
          <div className="deleteIcon text-red-600 hover:text-red-700 font-medium border border-red-600 p-0.5 rounded-md  ">
            <MdDelete className=" cursor-pointer " />
          </div>
          {/* delete icon  */}
        </div>
      </div>
    </div>
  );
};

export default UserList;
