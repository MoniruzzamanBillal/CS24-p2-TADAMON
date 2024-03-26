import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddStsEntry = () => {
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [departureTime, setDepartureTime] = useState(new Date());

  // react hook form states
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleAddStsEntry = (data) => {
    console.log("add ");
  };

  // for getting arrival time  , hour , am-pm
  const arrivalHours = arrivalTime.getHours();
  const arrivalHour = arrivalHours % 12 || 12;
  const arrivalMinute = arrivalTime.getMinutes();
  const arrivalAmpm = arrivalHours >= 12 ? "PM" : "AM";

  // for getting departure  time  , hour , am-pm
  const departureHours = departureTime.getHours();
  const departureHour = departureHours % 12 || 12;
  const departureMinute = departureTime.getMinutes();
  const departureAmpm = departureHours >= 12 ? "PM" : "AM";

  return (
    <div className="addStsEntryContainer">
      <div className="addStsEntryWrapper  bg-gray-100   bgImage flex justify-center items-center py-6  ">
        {/* car entry card starts  */}
        <div className="addCarEntry bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[88%] sm:w-[81%] md:w-[76%] xmd:w-[68%] lg:w-[56%] rounded-md border border-gray-300 ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Add Entry
          </h1>

          {/*  */}
          <form
            onSubmit={handleSubmit(handleAddStsEntry)}
            className=" w-[92%] xsm:w-[80%] sm:w-[76%] md:w-[72%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/* STS id input starts  */}
            <div className="stsIDInput">
              <input
                type="number"
                id="stsId"
                {...register("stsId", {
                  required: "STS ID is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter STS ID "
              />

              {errors?.stsId && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.stsId?.message}
                </p>
              )}
            </div>
            {/* STS id input ends  */}

            {/* vahical registration number starts  */}
            <div className="vehicalRegistrationInput">
              <input
                type="number"
                id="vehicalReg"
                {...register("vehicalReg", {
                  required:
                    "Vehical registration number is required is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter vehical registration number "
              />

              {errors?.vehicalReg && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.vehicalReg?.message}
                </p>
              )}
            </div>
            {/* vahical registration number ends  */}

            {/* carry weight input starts  */}
            <div className="vehicalcarryWeightInput">
              <input
                type="number"
                id="wasteWeight"
                {...register("wasteWeight", {
                  required: "Weight of waste is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter weight of waste in ton  "
              />

              {errors?.wasteWeight && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.wasteWeight?.message}
                </p>
              )}
            </div>
            {/* carry weight input ends  */}

            {/* vehical arrival time input starts  */}
            <div className="vehicalArrivalTime  ">
              <label htmlFor="startTime" className=" text-sm font-medium ">
                Arrival Time :
              </label>
              <DatePicker
                id="startTime"
                selected={arrivalTime}
                onChange={(date) => setArrivalTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className=" mt-1 block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none "
              />
            </div>
            {/* vehical arrival time input ends   */}

            {/* vehical departure time input starts  */}
            <div className="vehicalDepartureTime  ">
              <label htmlFor="endTime" className=" text-sm font-medium ">
                Departure Time :
              </label>
              <DatePicker
                id="endTime"
                selected={departureTime}
                onChange={(date) => setDepartureTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className=" mt-1 block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none "
              />
            </div>
            {/* vehical departure time input ends  */}

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
                "Add Entryy"
              )}
            </button>
          </form>
          {/*  */}
        </div>
        {/* car entry card ends  */}
      </div>
    </div>
  );
};

export default AddStsEntry;
