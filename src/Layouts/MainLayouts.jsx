import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-369px)]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
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
