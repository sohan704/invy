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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/createShop',
        element:<CreateShop></CreateShop>
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
      }

      
    ]
  }
]);