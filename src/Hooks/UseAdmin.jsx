import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const {user} = useContext(AuthContext);

  const {refetch, data: isAdmin = [], isPending: isAdminLoading} = useQuery({
    queryKey: ['isAdminVerify', user?.email],
    enabled: !!localStorage.getItem('access-token'),
    queryFn: async () => {
       const res = await axiosSecure.get(`/checkAdmin/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, isAdminLoading, isAdmin];
};

export default UseAdmin;