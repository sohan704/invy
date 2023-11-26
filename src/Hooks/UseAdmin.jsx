import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseAdmin = () => {
  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);

  const {refetch, data: isAdmin = [], isPending: isAdminLoading} = useQuery({
    queryKey: ['isAdminVerify', user?.email],
    queryFn: async () => {
       const res = await axiosPublic.get(`/checkAdmin/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, isAdminLoading, isAdmin];
};

export default UseAdmin;