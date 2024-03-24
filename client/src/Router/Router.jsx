import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <p>Setting routes</p>,
      },
    ],
  },
]);
