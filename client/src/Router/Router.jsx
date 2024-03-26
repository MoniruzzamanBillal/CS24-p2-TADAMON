import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddVehical from "../Pages/System admin/AddVehical";
import AddSts from "../Pages/System admin/AddSts";

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
        path: "/dashboard/addVehical",
        element: <AddVehical />,
      },
      {
        path: "/dashboard/addSts",
        element: <AddSts />,
      },
    ],
  },
]);
