import React from "react";
import GetSingleUser from "../../Hooks/GetSingleUser";

const UpdateUserProfile = () => {
  const { user, userLoading, userDataRefetch } = GetSingleUser(
    "6606a3418ab011404994b757"
  );

  console.log(user);
  return (
    <div className="UpdateUserProfileContainer">
      <div className="UpdateUserProfileWrapper">
        <h1>UpdateUserProfile</h1>
        <h1>UpdateUserProfile</h1>
        <h1>UpdateUserProfile</h1>
        <h1>UpdateUserProfile</h1>
        <h1>UpdateUserProfile</h1>
        <h1>UpdateUserProfile</h1>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
