import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseShopData = () => {

  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);


  const {refetch, data: shopData = []} = useQuery({
    queryKey: ['shopData', user?.email],
    queryFn: async () => {
       const res = await axiosPublic.get(`/getShopData/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, shopData];
  
};

export default UseShopData;