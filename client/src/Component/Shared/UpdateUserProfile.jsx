import { useEffect, useState } from "react";
import GetSingleUser from "../../Hooks/GetSingleUser";
import axios from "axios";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const UpdateUserProfile = () => {
  const { id } = useParams();
  const { axiosPublicUrl } = UseAxiosPublic();

  const { user, userLoading, userDataRefetch } = GetSingleUser(id);
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [userImage, setImage] = useState(null);

  //   function for update  user note: admin  will use this
  const handleUpdateUser = async () => {
    const formData = new FormData();
    formData.append("image", userImage);
    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );
    let imgUrl = imageResponse?.data?.data?.display_url;

    const updateData = {
      email,
      username,
      imgLink: imgUrl,
      id: user?.id,
      roles: user?.roles,
    };

    axiosPublicUrl
      .put(`/api/profile`, updateData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          alert("update complete !!! will show this with toast  ");
        }
      })
      .catch((error) => console.log(error));
  };

  // effect to set user info in state when data is fetched from hook
  useEffect(() => {
    setemail(user?.email);
    setusername(user?.username);
  }, [user, userLoading]);

  return (
    <div className="UpdateUserProfileContainer">
      <div className="UpdateUserProfileWrapper  bg-gray-200  h-screen   flex justify-center items-center  ">
        {/* update user card starts  */}
        <div className="updateUserCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Update user
          </h1>

          {/*  */}
          <div className=" formContainer w-[92%]  sm:w-[88%] md:w-[84%] xmd:w-[80%] lg:w-[74%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  ">
            {/* user name input starts  */}
            <div className="userNameinput">
              <input
                type="text"
                id="userName"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter user name"
              />
            </div>
            {/*  user name input ends   */}

            {/* user email input starts  */}
            <div className="userEmailinput">
              <input
                type="email"
                id="userEmail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter user Email"
              />
            </div>
            {/* user email input ends  */}

            {/* user image starts  */}
            <div className="userImage">
              <label htmlFor="file_input">Profile picture : </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                className="block mt-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  "
                id="file_input"
                type="file"
                placeholder="Image "
              />
            </div>

            {/* user image ends */}

            <div className="buttonSection  flex justify-center  ">
              {/* add user button starts  */}

              <button
                onClick={() => handleUpdateUser()}
                className="flex items-center justify-center px-5 py-1.5  font-medium rounded-md  bg-sky-500 hover:bg-sky-600 text-gray-50 hover:scale-105 active:scale-100 duration-200  "
              >
                Update User
              </button>
              {/* add user button ends */}
            </div>
          </div>
          {/*  */}
        </div>
        {/* update user card ends  */}
      </div>
    </div>
  );
};

export default UpdateUserProfile;
