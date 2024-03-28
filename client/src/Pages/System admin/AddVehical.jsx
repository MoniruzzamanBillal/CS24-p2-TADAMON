import { useForm } from "react-hook-form";

const AddVehical = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  //   function for adding vehical
  const handleAddVehical = (data) => {
    const vehicalRegNumber = data?.vehicalRegNumber;
    const vehicalType = data?.vehicalType;
    const vehicalCapacity = data?.vehicalCapacity;
    const loadedFuelCost = data?.loadedFuelCost;
    const unloadedFuelCost = data?.unloadedFuelCost;

    console.log(vehicalRegNumber);
    console.log(vehicalType);
    console.log(vehicalCapacity);
    console.log(loadedFuelCost);
    console.log(unloadedFuelCost);
  };

  return (
    <div className="addVehicalContainer">
      <div className="addVehicalWrapper bg-gray-100  h-screen  bgImage flex justify-center items-center   ">
        {/* add vehical card starts  */}
        <div className="addVehicalCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300   ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Add vehical
          </h1>

          <form
            onSubmit={handleSubmit(handleAddVehical)}
            className=" w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/* vehical numver input  */}
            <div className="vehicalRegistrationNumberInput">
              <input
                type="number"
                id="vehicalRegNumber"
                {...register("vehicalRegNumber", {
                  required: "vehical Registration Number is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter Vehical registration number"
              />

              {errors?.vehicalRegNumber && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.vehicalRegNumber?.message}
                </p>
              )}
            </div>
            {/* vehical registration number input  */}

            {/* vehical type input starts  */}
            <div className="vehicalTypeInput">
              <select
                id="vehicalType"
                {...register("vehicalType", {
                  required: "vehical type is required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Select vehical type</option>
                <option value="Open Truck">Open Truck</option>
                <option value="Dump Truck">Dump Truck</option>
                <option value="Compactor">Compactor</option>
                <option value="Container Carrier">Container Carrier</option>
              </select>

              {errors?.vehicalType && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.vehicalType?.message}
                </p>
              )}
            </div>

            {/* vehical type input ends  */}

            {/* vehical capacity input starts   */}
            <div className="vehicalCapacityInput">
              <select
                id="vehicalCapacity"
                {...register("vehicalCapacity", {
                  required: "vehical Capacity is required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Select vehical Capacity</option>
                <option value="3">3 ton</option>
                <option value="5">5 ton</option>
                <option value="7">7 ton</option>
              </select>

              {errors?.vehicalCapacity && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.vehicalCapacity?.message}
                </p>
              )}
            </div>
            {/* vehical capacity input ends   */}

            {/* loaded fuel cost input starts  */}
            <div className="loaded Fuel cost ">
              <input
                type="number"
                id="loadedFuelCost"
                {...register("loadedFuelCost", {
                  required: "Loaded fuel cost is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter Loaded fuel cost"
              />

              {errors?.loadedFuelCost && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.loadedFuelCost?.message}
                </p>
              )}
            </div>
            {/* loaded fuel cost input ends  */}

            {/* empty fuel cost input starts  */}
            <div className="unloaded Fuel cost ">
              <input
                type="number"
                id="unloadedFuelCost"
                {...register("unloadedFuelCost", {
                  required: "Unloaded fuel cost is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter unloaded fuel cost"
              />

              {errors?.unloadedFuelCost && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.unloadedFuelCost?.message}
                </p>
              )}
            </div>
            {/* empty fuel cost input ends  */}

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
            >
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Add vehical"
              )}
            </button>
          </form>
        </div>
        {/* add vehical card ends  */}
      </div>
    </div>
  );
};

export default AddVehical;
