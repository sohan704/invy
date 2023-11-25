import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseShopData = () => {

  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);
  
//FIX URLLLLLLLLLL BEFORE USING

  const {refetch, data: productData} = useQuery({
    queryKey: ['productData', user?.email],
    queryFn: async () => {
       const res = await axiosPublic.get(`/getShopData/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, productData];
  
};

export default UseShopData;