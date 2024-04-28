import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

import MyCart from "../Pages/MyCart";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddTouristSpot from "../Pages/AddTouristsSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/tourist_spot"),
      },
      {
        path: "/addTouristSpot",
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Route;
