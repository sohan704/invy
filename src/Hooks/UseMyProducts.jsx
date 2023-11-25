import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseShopData from "./UseShopData";

const UseMyProducts = () => {

  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);
  const [,shopData] = UseShopData();

//FIX URLLLLLLLLLL BEFORE USING

  const {refetch, data: productData} = useQuery({
    queryKey: ['productData', shopData?._id],
    queryFn: async () => {
       const res = await axiosPublic.get(`/getProductData/${shopData?._id}`);
       return res.data;
    }
  });

  return [refetch, productData];
  
};

export default UseMyProducts;