import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <div>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
    </div>
  );
};

export default MainLayouts;
