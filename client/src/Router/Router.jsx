import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddVehical from "../Pages/System admin/AddVehical";
import AddSts from "../Pages/System admin/AddSts";
import AddLandFil from "../Pages/System admin/AddLandFil";
import AddUser from "../Pages/System admin/AddUser";

export const Routes = createBrowserRouter([
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
    ],
  },
]);
