import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";
import DeleteModal from "./DeleteModal";

const UserList = ({ user, ind, usersDataRefetch }) => {
  const { axiosPublicUrl } = UseAxiosPublic();
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const [showModal, setShowModal] = useState(false);

  const { id, username } = user;

  // fucntion for deleting the user
  const handleDelete = (id) => {
    axiosPrivateUrl
      .delete(`/api/users/${id}`)
      .then((response) => {
        // console.log(response?.data);

        if (response?.data) {
          usersDataRefetch();
          setShowModal(!showModal);
          alert("delete complete !!! will show this with toast  ");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="userListContainer  my-6 ">
      <div className="userContainer bg-gray-200 shadow-md py-2 px-5 border border-gray-200 rounded-md  w-[90%] sm:w-[86%] md:w-[82%] xmd:w-[72%] lg:w-[62%] xl:w-[55%]  text-2xl flex items-center justify-between relative    ">
        <h1>
          <span className=" font-bold ">{ind + 1} .</span> {username}
        </h1>

        <div className="userIcon flex items-center gap-x-3 ">
          {/* edit icon  */}
          <div className="editIcon text-green-600 hover:text-green-700 font-medium border border-green-600 p-0.5 rounded-md ">
            <Link to={`/dashboard/profile/updateprofile/${id}`}>
              <MdEdit className=" cursor-pointer " />
            </Link>
          </div>
          {/* edit icon  */}

          {/* delete icon  */}
          <div
            className="deleteIcon text-red-600 hover:text-red-700 font-medium border border-red-600 p-0.5 rounded-md   "
            onClick={() => setShowModal(!showModal)}
          >
            <MdDelete className=" cursor-pointer " />
          </div>
          {/* delete icon  */}
        </div>

        {/* delate modal starts  */}
        {showModal && (
          <div
            className={`deleteModal absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  z-[10] `}
          >
            <DeleteModal
              showModal={showModal}
              setShowModal={setShowModal}
              id={id}
              handleDelete={handleDelete}
            />
          </div>
        )}

        {/* delate modal ends  */}
      </div>
    </div>
  );
};

export default UserList;
