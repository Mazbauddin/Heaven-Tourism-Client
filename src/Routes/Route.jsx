import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

import MyCart from "../Pages/MyCart";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddTouristSpot from "../Pages/AddTouristsSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import View_Details from "../Pages/View_Details";
import Update from "../Pages/Update";

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
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/myCart"),
      },
      {
        path: "/viewDetails",
        element: (
          <PrivateRoute>
            <View_Details></View_Details>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        // loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
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
