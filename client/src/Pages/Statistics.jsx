//

import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div className="StatisticsContainer">
      <div className="StatisticsWrapper h-screen flex flex-col justify-center items-center gap-y-8 text-2xl  ">
        {/*  */}

        {/* waste collection button starts  */}
        <div className="wasteCollection  ">
          <Link to={"/dashboard/statistics/wasteCollection"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Waste collection
            </button>
          </Link>
        </div>
        {/* waste collection button ends */}

        {/* transportation button starts  */}
        <div className="transportation  ">
          <Link to={"/dashboard/statistics/transportaion"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Transportation
            </button>
          </Link>
        </div>
        {/* transportation button ends  */}

        {/* daily fuel cost button starts  */}
        <div className="dailyFuelCost   ">
          <Link to={"/dashboard/statistics/dailyFuelCost"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Daily fuel cost
            </button>
          </Link>
        </div>
        {/* daily fuel cost button ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Statistics;
