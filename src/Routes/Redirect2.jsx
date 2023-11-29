import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";


const Redirect2 = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [adminInfo, setAdminInfo] = useState(null);
  const axiosPublic = UseAxiosPublic();
  const [verify, owner_loading] = UseOwnerVerification();
 console.log(verify);

  
 useEffect(() => {


  axiosPublic.get(`/checkAdmin/${user?.email}`).then(res => setAdminInfo(res.data));
}, [])




  

  if(adminInfo?.admin){
    return children;
  }

  if( (adminInfo !== null) && !adminInfo?.admin){
    return <Navigate to='/notAdmin'></Navigate>;
  }

  
};

export default Redirect2;