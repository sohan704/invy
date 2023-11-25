import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
        <div className="w-64 min-h-full bg-[#F5F7F8]">
          <ul className="menu">
            <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
            <li><NavLink to="/dashboard/allProduct">All Product</NavLink></li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Dashboard;