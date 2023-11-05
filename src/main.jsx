import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import MyServices from "./Pages/MyServices";
import AuthProvider from "./Providers/AuthProvider";
import SingUp from "./Pages/SingUp";
import AddServices from "./Pages/AddServices";
import MySchedules from "./Pages/MySchedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/myServices",
        element: <MyServices/>
      },
      {
        path: "/addServices",
        element: <AddServices/>
      },
      {
        path: "/addSchedules",
        element: <MySchedules/>
      },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Services",
        element: <Services/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/singUp",
        element: <SingUp/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);