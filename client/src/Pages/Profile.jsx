import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="ProfileContainer">
      <div className="ProfileWrapper h-screen  flex ">
        {/*  */}
        <div className="myProfileWrapper  w-[95%] xsm:w-[90%] sm:w-[85%] md:w-[95%] lg:w-[85%] m-auto ">
          {/*  */}
          {/*  */}
          <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8  ">
              <div className="flex flex-col justify-center items-center gap-y-6  ">
                {/* profile top sectionn starts   */}

                <div className="profileTop   ">
                  <div className="h-[14rem] w-[22rem] overflow-hidden rounded-lg bg-gray-600 shadow-lg ">
                    <img
                      src="https://i.ibb.co/1LdGcYN/images.jpg"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* profile top sectionn ends    */}

                {/* profile bottom starts  */}
                <div className=" profileBottom  pt-4  ">
                  {/* user name  */}
                  <div className="userName  text-base sm:text-lg lg:text-xl mb-2  ">
                    <p>
                      Username :{" "}
                      <span className="font-semibold"> user?.displayName </span>{" "}
                    </p>
                  </div>
                  {/* user name  */}

                  {/* user email  */}
                  <div className="userEmail text-base sm:text-lg lg:text-xl mb-2  ">
                    <p>
                      Email address :{" "}
                      <span className="font-semibold"> user?.email </span>{" "}
                    </p>
                  </div>
                  {/* user email  */}

                  {/* user role  */}
                  <div className="userRole  text-base sm:text-lg lg:text-xl mb-2  ">
                    <p>
                      Role : <span className="font-semibold">User</span>{" "}
                    </p>
                  </div>
                  {/* user role  */}

                  {/* update button  */}
                  <div className="updateBtn">
                    <button className=" mt-5 rounded hover:shadow font-semibold bg-gray-600 hover:bg-gray-700 dark:bg-gray-100 active:scale-[.99] py-2 w-full text-white dark:text-gray-900 ">
                      Edit profile
                    </button>
                  </div>
                  {/* update button  */}

                  {/*  */}
                </div>
                {/* profile bottom ends   */}
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Profile;
