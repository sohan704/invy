import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAdminIncome = () => {
  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);
  const {refetch, data: adminData = [],isPending: isIncomeLoading} = useQuery({
    queryKey: ['adminIncomeData', user?.email],
    queryFn: async () => {
       const res = await axiosPublic.get(`/adminData/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, isIncomeLoading, adminData];
};

export default UseAdminIncome;