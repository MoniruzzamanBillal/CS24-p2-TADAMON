import { IoMdCheckmark } from "react-icons/io";

const UserRoleBtn = ({
  roleClick,
  setRoleClick,
  handleUserRole,
  value,
  title,
}) => {
  //   console.log(roleClick);
  //   console.log(value);
  return (
    <div className="UserRoleBtnContainer">
      <div className="UserRoleBtnWrapper">
        <div
          className={` userRole   inline-block  cursor-pointer rounded-md border  ${
            roleClick
              ? "bg-green-300 border-green-600 "
              : "bg-gray-300 border-gray-300 "
          }  `}
          onClick={() => handleUserRole(value)}
        >
          <div
            className="userRoleCOntainer   flex justify-center items-center gap-x-1 font-medium py-2 px-5  "
            onClick={() => setRoleClick(!roleClick)}
          >
            <h1>{title} </h1>
            <IoMdCheckmark
              className={`  ${roleClick ? " visible " : "invisible "}  `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleBtn;
