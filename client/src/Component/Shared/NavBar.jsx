import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navLink = [
  {
    item: "Dashboard",
    link: "/dashboard",
  },
];

const NavBar = () => {
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [toggle, setToggle] = useState(false);

  // menu toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={` navContainer  z-50 py-2.5  bg-gray-100 dark:bg-gray-400  fixed w-full drop-shadow-lg `}
    >
      <ToastContainer />
      <div className="navWrapper flex justify-between w-[98%] xsm:w-[97%] lg:w-[96%] m-auto items-center ">
        {/* nav left  */}
        <div className="navLeft  ">
          <div className="navLeftImg  ">
            <Link
              to={`/`}
              className="self-center cursor-pointer  font-semibold whitespace-nowrap "
            >
              <div className=" flex justify-center items-center  ">
                <div className="logo w-[2.1rem] h-[2.1rem] xsm:w-[2.6rem] xsm:h-[2.5rem] sm:w-[2.8rem] sm:h-[2.7rem]  rounded-md overflow-auto ">
                  <img
                    src="https://i.ibb.co/phpJRMB/rocket-1976107-640.png"
                    className="  w-full h-full "
                    alt=""
                  />{" "}
                </div>
                <p
                  className={`   text-gray-900 dark:text-white text-sm xsm:text-base lg:text-xl  CormorantFont  `}
                >
                  EcoSync
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* nav left  */}

        {/* nav right  */}
        <div className="navRight  flex justify-between items-center  ">
          <div className="navLinks hidden md:flex  justify-center items-center   mr-1.5 ">
            {navLink.map((ele, ind) => (
              <NavLink
                key={ind}
                to={ele.link}
                className={`  ${
                  navLink.length - 1 === ind ? "mr-0" : "mr-5"
                } relative group  text-base lg:text-lg   text-gray-700 dark:text-[#E4F1FF] hover:text-blue-500    `}
              >
                {ele.item}

                <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.14rem] bg-blue-400 group-hover:w-full group-hover:transition-all"></span>
              </NavLink>
            ))}
          </div>
          {/* !mobile view  */}

          <div className="notMobile  mr-1 flex justify-center items-center relative z-[10]  ">
            {/*  */}
            {/*  */}

            <Link
              to={`/login`}
              className=" hidden md:block bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
            >
              Log in
            </Link>

            {/* <!-- Dropdown menu --> */}

            {/*  */}
            {/*  */}
          </div>

          {/* !mobile view  */}

          {/*  */}
          {/* mobile view  */}

          <div className="mobileView flex md:hidden relative ">
            {/* menu icon  */}
            <div
              className="menuIcon text-lg xsm:text-xl sm:text-2xl "
              onClick={() => handleToggle()}
            >
              {!toggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon  */}

            {/* menu list  */}

            {toggle && (
              <div className="menuList text-center py-2 bg-[#183D3D] dark:bg-gray-300 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[4.8rem] top-[5.7rem] sm:top-[5.8rem] w-[10rem] ">
                <div className="menuItem mb-4  ">
                  {navLink.map((ele, ind) => (
                    <div
                      key={ind}
                      className={` text-base ${
                        ind === navLink.length - 1 ? "pb-0" : "pb-3"
                      }  `}
                    >
                      <a
                        href={ele.link}
                        className="  cursor-pointer text-gray-50 dark:text-gray-900 "
                        onClick={() => handleToggle()}
                      >
                        {" "}
                        {ele.item}{" "}
                      </a>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/login`}
                  className=" bg-amber-300 dark:bg-violet-500 rounded   py-1.5 px-5 text-gray-700 dark:text-white "
                  onClick={() => handleToggle()}
                >
                  Log in
                </Link>

                {/* {user ? (
                <Link
                  className=" bg-amber-300 dark:bg-violet-500 rounded  py-1.5 px-5 text-gray-700 dark:text-white "
                  onClick={() => {
                    handleToggle();
                  }}
                >
                  Log out
                </Link>
              ) : (
                <Link
                  to={`/login`}
                  className=" bg-amber-300 dark:bg-violet-500 rounded   py-1.5 px-5 text-gray-700 dark:text-white "
                  onClick={() => handleToggle()}
                >
                  Log in
                </Link>
              )} */}
              </div>
            )}
            {/* menu list  */}
          </div>

          {/* mobile view  */}
        </div>
        {/* nav right  */}
      </div>
    </div>
  );
};

export default NavBar;
