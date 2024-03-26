const VehicleSlip = () => {
  return (
    <div className="vehicalSlipContainer">
      <div className="vehicalSliptWrapper flex justify-center items-center py-6 ">
        {/* vehical entry card starts  */}
        <div className="vehicalSlipCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[88%] sm:w-[81%] md:w-[76%] xmd:w-[68%] lg:w-[56%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Vehicle slip
          </h1>

          <div className="Details  flex flex-col gap-y-3 text-lg ">
            {/* date starts  */}
            <h1>
              <span className=" font-medium ">Date :</span> 26 March 2024
            </h1>
            {/* date ends  */}

            {/* car type starts  */}
            <h1>
              {" "}
              <span className=" font-medium ">car type :</span> dump truck{" "}
            </h1>
            {/* car type ends  */}

            {/* registration number starts  */}
            <h1>
              {" "}
              <span className=" font-medium ">Registration number :</span>{" "}
              12345678
            </h1>
            {/* registration number ends  */}

            {/* fuel cost per km starts  */}
            <h1>
              {" "}
              <span className=" font-medium ">Fuel cost :</span> 20${" "}
            </h1>
            {/* fuel cost per km ends  */}

            {/* arrival time starts  */}
            <h1>
              {" "}
              <span className=" font-medium ">Arrival time :</span> 9:30 am{" "}
            </h1>
            {/* arrival time ends  */}

            {/* departure time starts  */}
            <h1>
              {" "}
              <span className=" font-medium ">Departure time :</span> 5:30 pm{" "}
            </h1>
            {/* departure time ends  */}
          </div>
        </div>
        {/* vehical entry card ends  */}
      </div>
    </div>
  );
};

export default VehicleSlip;
