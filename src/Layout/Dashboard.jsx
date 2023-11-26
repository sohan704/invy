import { NavLink, Outlet } from "react-router-dom";
import UseShopData from "../Hooks/UseShopData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAdmin from "../Hooks/UseAdmin";

const Dashboard = () => {

  const [, shopData] = UseShopData();
  const [, isAdmin] = UseAdmin();
  console.log('Check admin ',isAdmin);


  //  const {shopLogo} = shopData;
  //  console.log(shopData);
  //  console.log();
  //  

  return (
    <>
      <div className="flex h-[120vh] font-playFair text-[#495E57] bg-[#F5F7F8]">
        <div className="w-64 min-h-full bg-[#F5F7F8] border-gray-700 border-r-4">
          <div className="flex justify-center items-center py-3">
            {isAdmin.admin ? " " : <img className="h-[100px] w-[100px] object-cover"
              src={shopData?.shopLogo} alt="" />}
          </div>
         {isAdmin?.admin ? <ul className="menu  text-2xl">
         <li><NavLink to="/dashboard/salesview">Sales History</NavLink></li>
         </ul> :  <ul className="menu  text-2xl">
            <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
            <li><NavLink to="/dashboard/allProduct">All Product</NavLink></li>
            <li><NavLink to="/dashboard/productCollection">Product Collection</NavLink></li>
            <li><NavLink to="/dashboard/payment">Payment</NavLink></li>
            <li><NavLink to="/dashboard/salesCount">Sales Count</NavLink></li>
            <li><NavLink to="/dashboard/salesHistory">Sales History</NavLink></li>

          </ul> }
          <br />
          <div className="divider divider-neutral"></div>
          <ul className="menu ">
            <li className="btn text-2xl text-neutral  btn-outline  btn-neutral"><NavLink to="/">Home</NavLink></li>


          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;