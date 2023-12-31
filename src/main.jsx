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
import MyServices from "./Pages/ManageServices";
import AuthProvider from "./Providers/AuthProvider";
import SingUp from "./Pages/SingUp";
import AddServices from "./Pages/AddServices";
import MySchedules from "./Pages/MySchedules";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "./Pages/ServiceDetails";
import UpdateService from "./Pages/UpdateService";
import axios from "axios";
import ContactUs from "./Pages/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/myServices",
        element: <PrivateRoute><MyServices /></PrivateRoute>
      },
      {
        path: "/addServices",
        element: <PrivateRoute><AddServices /></PrivateRoute>
      },
      {
        path: "/addSchedules",
        element: <PrivateRoute><MySchedules /></PrivateRoute>
      },
      {
        path: "/Services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/servicesDetail/:id",
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>
      },
      {
        path: "service/update/:id",
        element: <PrivateRoute><UpdateService /></PrivateRoute>,
        loader: ({ params }) => {
         return axios.get(`http://localhost:7000/api/v1/get-serviceDetails/${params.id}`)
        }
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/singUp",
        element: <SingUp />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);