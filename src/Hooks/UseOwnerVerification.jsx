import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseOwnerVerification = () => {
  
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const {user} = useContext(AuthContext);

 const {data: isOwner, isPending: ownerLoading} = useQuery({
   queryKey: ['isOwner', user?.email],
   enabled: !!localStorage.getItem('access-token'),
   queryFn: async () => {
      const res = await axiosSecure.get(`/isOwner/${user?.email}`);
      return res.data;
   }
 });

 return [isOwner, ownerLoading];
};

export default UseOwnerVerification;