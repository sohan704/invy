import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";


const Redirect = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [adminInfo, setAdminInfo] = useState(null);
  const axiosPublic = UseAxiosPublic();
  const [verify, owner_loading] = UseOwnerVerification();
 console.log(verify);
 const [ownerInfo, setOwnerInfo] = useState(null);
  
 useEffect(() => {
  axiosPublic.get(`/isOwner/${user?.email}`).then(res => setOwnerInfo(res.data));

  // axiosPublic.get(`/checkAdmin/${user?.email}`).then(res => setAdminInfo(res.data));
}, [])




  

  if(ownerInfo?.owner){
    return children;
  }

  if( (ownerInfo !== null) && !ownerInfo?.owner){
    return <Navigate to='/notOwner'></Navigate>;
  }

  
};

export default Redirect;