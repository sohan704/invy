import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseShopData = () => {

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const {user,loading} = useContext(AuthContext);


  const {refetch, data: shopData = []} = useQuery({
    queryKey: ['shopData', user?.email],
    enabled: !loading && !!localStorage.getItem('access-token'),
    queryFn: async () => {
       const res = await axiosSecure.get(`/getShopData/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, shopData];
  
};

export default UseShopData;