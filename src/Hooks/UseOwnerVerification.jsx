import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseOwnerVerification = () => {
  
  const axiosPublic = UseAxiosPublic();
  const {user} = useContext(AuthContext);

 const {data: isOwner} = useQuery({
   queryKey: ['isOwner', user?.email],
   queryFn: async () => {
      const res = await axiosPublic.get(`/isOwner/${user?.email}`);
      return res.data;
   }
 });

 return [isOwner];
};

export default UseOwnerVerification;