import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const UseOwnerVerification = () => {
  
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const {user,   loading} = useContext(AuthContext);

 const {data: isOwner, isPending: ownerLoading} = useQuery({
   queryKey: ['isOwner', user?.email],
   enabled:!loading && !!localStorage.getItem('access-token') && !!user?.email,
   queryFn: async () => {
      const res = await axiosPublic.get(`/isOwner/${user?.email}`);
      return res.data;
   },
    

   deps: [user?.email],
 });
  


 return [isOwner, ownerLoading];
};

export default UseOwnerVerification;