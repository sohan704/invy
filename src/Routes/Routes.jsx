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



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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

    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'AllProduct',
        element:<AllProducts></AllProducts>
      },
      {
        path:'updateProduct',
        element:<UpdateProduct></UpdateProduct>
      },
      {
        path:'productCollection',
        element: <ProductCollection></ProductCollection>,
      },
      {
        path:'checkout/:id',
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path:'payment',
        element: <Premium></Premium>,
      },
      {
        path:'salesCount',
        element: <SalesCount></SalesCount>,
      },
      {
        path:'payment/stripepayment/:price/:limit',
        element:<Stripepayment></Stripepayment>
      },
      {
        path:'salesHistory',
        element: <SalesHistory></SalesHistory>,
      },
      {
        path:'salesview',
        element:<Salesview></Salesview>
      },
      {
        path:'manageShop',
        element:<Manageshop></Manageshop>
      },
      {
        path:'usersSection',
        element: <UsersSection></UsersSection>
      },
      {
        path:'sendEmails',
        element:<TestEmail></TestEmail>
      },
      {
        path:'cartCheckout',
        element: <CartCheckout></CartCheckout>
      }

      
    ]
  }
]);