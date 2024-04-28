import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import Route from "./Routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={Route}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
