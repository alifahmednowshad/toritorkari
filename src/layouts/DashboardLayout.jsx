import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/Sidebar";


const DashboardLayout = () => {
    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary rounded-none drawer-button lg:hidden"
            >
              Open Sidebar
            </label>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* Sidebar content here */}
            <div className="">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;