import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Router";
import { AuthProvider } from "./Context/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StateContextProvider } from "./Context/StateContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StateContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Routes} />
        </QueryClientProvider>
      </StateContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
