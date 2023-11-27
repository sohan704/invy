import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const {user, loading} = useContext(AuthContext);

  const {refetch, data: isAdmin = [], isPending: isAdminLoading} = useQuery({
    queryKey: ['isAdminVerifyNow', user?.email],
    enabled: !loading && !!localStorage.getItem('access-token') && !!user?.email,
    queryFn: async () => {
       const res = await axiosSecure.get(`/checkAdmin/${user?.email}`);
       return res.data;
    }
  });

  return [refetch, isAdminLoading, isAdmin];
};

export default UseAdmin;