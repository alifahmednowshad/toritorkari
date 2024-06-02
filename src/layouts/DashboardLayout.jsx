import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";


const DashboardLayout = () => {
    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet />
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
              {/* Sidebar content here */}
              <div className="">
              <Sidebar/>
              </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;