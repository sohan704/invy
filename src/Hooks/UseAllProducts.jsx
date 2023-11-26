import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAllProducts = () => {

  const axiosPublic = UseAxiosPublic();
  const { user } = useContext(AuthContext);

  const { refetch, data: allProducts = [], isPending: isProductsLoading } = useQuery({
    queryKey: ['allTheProducts', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allProducts/${user?.email}`);
      return res.data;
    }
  });

  return [refetch, isProductsLoading, allProducts];
};

export default UseAllProducts;