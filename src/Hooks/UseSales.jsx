import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

import UseShopData from "./UseShopData";

const UseSales = () => {

  const axiosPublic = UseAxiosPublic();

  const [,shopData] = UseShopData();
  
  const { refetch, data: salesData = [] } = useQuery({
    queryKey: ['salesData', shopData?._id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/sales/${shopData._id}`);
      return res.data;
    }
  });

  return [refetch, salesData];
};

export default UseSales;