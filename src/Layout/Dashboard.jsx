import { NavLink, Outlet } from "react-router-dom";
import UseShopData from "../Hooks/UseShopData";

const Dashboard = () => {

   const [shopData] = UseShopData();

  //  const {shopLogo} = shopData;
  //  console.log(shopData);
  //  console.log();


  return (
    <div className="flex h-[100vh] font-playFair text-[#495E57] bg-[#F5F7F8]">
      <div className="w-64 min-h-full bg-[#F5F7F8] border-gray-700 border-r-4">
        <div className="flex justify-center items-center py-3">
          <img className="h-[100px] w-[100px] object-cover" 
          src={shopData?.shopLogo} alt="" />
        </div>
        <ul className="menu  text-2xl">
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