// importing libraries:
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

// importing icons:
import {
  adminMenu,
  landfilManagerMenu,
  stsManagerMenu,
} from "../Util/ConstantData";

const Dashboard = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <section className="relative flex justify-end    ">
      {/* sidebar container starts  */}
      <div
        className={` SideBarContainer fixed top-0 ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } z-20  md:left-0 duration-200`}
      >
        <div className=" mainContainer relative w-64 h-screen p-5 pt-5 duration-300 bg-gray-600  sm:w-64">
          {/* top  container starts */}
          <div className="mb-2 topContainer AccountContainer ">
            <div className="flex items-center space-x-4 ">
              <img
                className="w-11 h-11 p-1 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"
                src={`https://i.ibb.co/WPQvZzj/46810.jpg`}
                alt="Bordered avatar"
              />

              <div className="font-medium text-white sm:block">
                <div>
                  <p> User name </p>
                </div>
              </div>
            </div>
          </div>

          {/* top  container ends */}

          {/* bottom list items start  */}

          <Link
            to={"/"}
            className={`flex rounded-md mt-10 py-3 px-4 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  bg-[#fff3]`}
          >
            <h1 className={` gap-1  origin-left duration-200 w-full `}>Home</h1>
          </Link>

          <div className="mt-3 sidebarList">
            {/*  */}

            {/* Admin side links  */}
            {/* {adminMenu &&
              adminMenu.map((ele, ind) => (
                <NavLink
                  to={ele.path}
                  key={ind}
                  className={`flex rounded-md py-3 px-4 cursor-pointer bg-[#fff3] text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  mb-3`}
                >
                  <h1 className={` gap-1  origin-left duration-200 w-full `}>
                    {ele.title}
                  </h1>
                </NavLink>
              ))} */}
            {/* admin side links ends  */}

            {/* sts manager menu starts  */}
            {/* {stsManagerMenu &&
              stsManagerMenu.map((ele, ind) => (
                <NavLink
                  to={ele.path}
                  key={ind}
                  className={`flex rounded-md py-3 px-4 cursor-pointer bg-[#fff3] text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  mb-3`}
                >
                  <h1 className={` gap-1  origin-left duration-200 w-full `}>
                    {ele.title}
                  </h1>
                </NavLink>
              ))} */}
            {/* sts manager menu ends  */}

            {/* landfil manager menu starts  */}
            {landfilManagerMenu &&
              landfilManagerMenu.map((ele, ind) => (
                <NavLink
                  to={ele.path}
                  key={ind}
                  className={`flex rounded-md py-3 px-4 cursor-pointer bg-[#fff3] text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  mb-3`}
                >
                  <h1 className={` gap-1  origin-left duration-200 w-full `}>
                    {ele.title}
                  </h1>
                </NavLink>
              ))}
            {/* landfil manager menu ends  */}

            {/*  */}
          </div>

          {/* bottom list items end  */}

          {/* bottom list items end  */}
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[20px] h-[50px] right-[20px] md:hidden flex flex-col justify-center gap-2 bg-gray-500 p-2 rounded cursor-pointer z-[20] "
      >
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "-rotate-45 translate-y-[13px]" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "rotate-45 translate-y-[-13px]" : ""
          }`}
        ></div>
      </div>
      {/* hamburger emnu ends  */}

      {/* sidebar child component starts  */}
      <div className="w-[100%] md:w-[calc(100%-16rem)] pl-2 pt-1  ">
        <Outlet />
      </div>

      {/* sidebar child components ends */}
      {/* child components starts ends */}
    </section>
  );
};

export default Dashboard;
