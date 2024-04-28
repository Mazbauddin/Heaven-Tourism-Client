import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddTourismSpot from "../Pages/AddTourismSpot";
import AllTourisemSpot from "../Pages/AllTourisemSpot";
import MyCart from "../Pages/MyCart";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTourismSpot",
        element: <AddTourismSpot></AddTourismSpot>,
      },
      {
        path: "/allTourismSpot",
        element: <AllTourisemSpot></AllTourisemSpot>,
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
