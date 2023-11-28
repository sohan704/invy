import { useQuery } from "@tanstack/react-query";
// import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseShopData from "./UseShopData";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMyProducts = () => {

  // const axiosPublic = UseAxiosPublic();
  const axiosPublic = UseAxiosPublic();
  const {user, loading} = useContext(AuthContext);
  const [ , ,shopData] = UseShopData();

//FIX URLLLLLLLLLL BEFORE USING

  const {refetch, data: productData} = useQuery({
    queryKey: ['productData', shopData?._id],
    enabled: !loading && !!localStorage.getItem('access-token'),
    queryFn: async () => {
       const res = await axiosPublic.get(`/getProductData/${shopData?._id}`);
       return res.data;
    }
  });

  return [refetch, productData];
  
};

export default UseMyProducts;