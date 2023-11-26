import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAllSales = () => {

  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);
  const {refetch, data: allSale = [],isPending: isSalesLoading} = useQuery({
    queryKey: ['adminSales', user?.email, user?.displayName],
    queryFn: async () => {
       const res = await axiosPublic.get(`/allSales/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, isSalesLoading, allSale];
};

export default UseAllSales;