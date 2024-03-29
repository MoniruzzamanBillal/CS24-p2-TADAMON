import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddVehical from "../Pages/System admin/AddVehical";
import AddSts from "../Pages/System admin/AddSts";
import AddLandFil from "../Pages/System admin/AddLandFil";
import AddUser from "../Pages/System admin/AddUser";
import AddStsEntry from "../Pages/STS manager/AddStsEntry";
import AddLandfilEntry from "../Pages/Landfil Manager/AddLandfilEntry";
import Test from "../Pages/Test";
import RootPage from "./RootPage";
import Home from "../Pages/Home";
import ManageUser from "../Pages/System admin/ManageUser";
import ShowUsers from "../Pages/System admin/ShowUsers";
import Statistics from "../Pages/Statistics";
import WasteCollection from "../Component/Statistics/WasteCollection";
import Transportation from "../Component/Statistics/Transportation";
import FuelCost from "../Component/Statistics/FuelCost";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/test",
        element: <Test />,
      },
      {
        path: "/dashboard/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard/statistics/wasteCollection",
        element: <WasteCollection />,
      },
      {
        path: "/dashboard/statistics/transportaion",
        element: <Transportation />,
      },
      {
        path: "/dashboard/statistics/dailyFuelCost",
        element: <FuelCost />,
      },
      {
        path: "/dashboard/manageUser",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/showUser",
        element: <ShowUsers />,
      },
      {
        path: "/dashboard/adduser",
        element: <AddUser />,
      },
      {
        path: "/dashboard/addVehical",
        element: <AddVehical />,
      },
      {
        path: "/dashboard/addSts",
        element: <AddSts />,
      },
      {
        path: "/dashboard/addLandfill",
        element: <AddLandFil />,
      },
      {
        path: "/dashboard/sts/addEntry",
        element: <AddStsEntry />,
      },
      {
        path: "/dashboard/landfil/addEntry",
        element: <AddLandfilEntry />,
      },
    ],
  },
]);
