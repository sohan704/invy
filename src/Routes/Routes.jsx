import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateShop from "../Pages/CreateShop/CreateShop";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../DashboardPages/AddProduct";
import AllProducts from "../DashboardPages/AllProducts";
import UpdateProduct from "../DashboardPages/UpdateProduct";
import ProductCollection from "../DashboardPages/ProductCollection";
import CheckoutPage from "../DashboardPages/CheckoutPage";
import Premium from "../DashboardPages/Premium";
import Stripepayment from "../Pages/Stripe/Stripepayment";
import SalesCount from "../DashboardPages/SalesCount";
import SalesHistory from "../DashboardPages/SalesHistory";
import Salesview from "../DashboardPages/Salesview";
import PrivateRoutes from "./PrivateRoutes";
import OwnerRoutes from "./OwnerRoutes";
import Blank from "../Pages/Blank";
import Manageshop from "../DashboardPages/Manageshop";
import UsersSection from "../DashboardPages/UsersSection";
import TestEmail from "../DashboardPages/TestEmail";
import CartCheckout from "../DashboardPages/CartCheckout";
import Redirect from "./Redirect";
import NotAdmin from "../Pages/NotAdmin";
import Redirect2 from "./Redirect2";
import NotOwner from "../Pages/NotOwner";
import Error from "../Pages/Error";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blank',
        element: <Blank></Blank>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/createShop',
        element: <PrivateRoutes><CreateShop></CreateShop></PrivateRoutes>
      },
      {
        path:'/notAdmin',
        element: <NotAdmin></NotAdmin>
      },
      {
        path:'/notOwner',
        element: <NotOwner></NotOwner>
      }

    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'addProduct',
        element:<Redirect><AddProduct></AddProduct></Redirect>
      },
      {
        path:'AllProduct',
        element:<Redirect><AllProducts></AllProducts></Redirect>
      },
      {
        path:'updateProduct',
        element:<Redirect><UpdateProduct></UpdateProduct></Redirect>
      },
      {
        path:'productCollection',
        element: <Redirect><ProductCollection></ProductCollection></Redirect>,
      },
      {
        path:'checkout/:id',
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path:'payment',
        element: <Redirect><Premium></Premium></Redirect>,
      },
      {
        path:'salesCount',
        element: <Redirect><SalesCount></SalesCount></Redirect>,
      },
      {
        path:'payment/stripepayment/:price/:limit',
        element:<Redirect><Stripepayment></Stripepayment></Redirect>
      },
      {
        path:'salesHistory',
        element: <Redirect><SalesHistory></SalesHistory></Redirect>,
      },
      {
        path:'salesview',
        element:<Redirect2><Salesview></Salesview></Redirect2>
      },
      {
        path:'manageShop',
        element:<Redirect2><Manageshop></Manageshop></Redirect2>
      },
      {
        path:'usersSection',
        element: <Redirect2><UsersSection></UsersSection></Redirect2>
      },
      {
        path:'sendEmails',
        element:<Redirect><TestEmail></TestEmail></Redirect>
      },
      {
        path:'cartCheckout',
        element: <Redirect><CartCheckout></CartCheckout></Redirect>
      }

      
    ]
  }
]);