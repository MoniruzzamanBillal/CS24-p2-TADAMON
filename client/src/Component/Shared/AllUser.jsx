const AllUser = () => {
  return (
    <div className="allUserContainer">
      <div className="allUserWrapper">
        {/*  */}

        <div className=" border border-gray-300 w-[90%] m-auto relative overflow-x-auto shadow-md sm:rounded-lg   ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  User Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Update Profile
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete profile
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  uSER NAME
                </th>
                <td className="px-6 py-4">STS manager</td>
                <td className="px-6 py-4">
                  <button className=" py-1.5 px-4 rounded-md bg-green-500  text-gray-50 font-medium hover:bg-green-600 ">
                    Update
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className=" py-1.5 px-4 rounded-md bg-red-500  text-gray-50 font-medium hover:bg-red-600 ">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default AllUser;
