//
const TruckList = ({ truck, trucks, setTrucks, handleAddTruck }) => {
  const { id, name, reg } = truck;

  return (
    <div
      className="TruckListContainer my-3 "
      onClick={() => handleAddTruck(id, name)}
    >
      <div className=" cursor-pointer truckLists bg-gray-50  py-2 px-4 shadow-md rounded   flex justify-between items-cente gap-x-10 font-medium  ">
        {/* truck name starts  */}
        <h1 className=" text-sm  "> {name} </h1>
        {/* truck name ends  */}

        {/* truck registration number starts  */}
        <h1 className=" text-xs  "> reg no:{reg} </h1>
        {/* truck registration number ends  */}
      </div>
    </div>
  );
};

export default TruckList;
