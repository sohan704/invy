import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseShopData from "./UseShopData";

const UseSales = () => {

  const axiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);
  const [,shopData] = UseShopData();
  
  const { refetch, data: salesData = [] } = useQuery({
    queryKey: ['salesData', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/sales/${shopData._id}`);
      return res.data;
    }
  });

  return [refetch, salesData];
};

export default UseSales;