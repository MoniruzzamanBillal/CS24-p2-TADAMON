import React from "react";

import { RiErrorWarningLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const DeleteModal = ({ showModal, setShowModal, id, handleDelete }) => {
  return (
    <div className="DeleteModalContainer relative ">
      <div className="DeleteModalWrapper py-3 px-5 bg-gray-300 shadow-md border border-gray-300 rounded flex justify-center items-center flex-col gap-y-4 ">
        {/* icon starts  */}
        <RiErrorWarningLine className=" text-5xl text-red-600 font-semibold " />
        {/* icon ends  */}

        {/* warning message  */}
        <h1 className=" text-lg font-medium text-center ">
          Are you sure you want to delete this user?
        </h1>
        {/* warning message  */}

        {/* delete button starts  */}
        <div className="deleteBtn">
          <button
            className=" py-1.5 px-5 bg-red-500 hover:bg-red-600 rounded text-gray-50 font-medium  active:scale-95 duration-150  text-sm "
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
        {/* delete button ends  */}
      </div>

      {/* close icon starts  */}
      <div className="closeIcon text-red-600 font-semibold absolute top-0 right-0 ">
        <IoMdClose
          className=" cursor-pointer "
          onClick={() => setShowModal(!showModal)}
        />
      </div>
      {/* close icon ends  */}
    </div>
  );
};

export default DeleteModal;
