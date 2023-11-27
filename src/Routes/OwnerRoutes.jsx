import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";
import UseAdmin from "../Hooks/UseAdmin";


const OwnerRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
 
  const [verify, ownerLoading] = UseOwnerVerification();
  const [ ,adminLoading ,isAdmin] = UseAdmin();



  if(loading || ownerLoading || adminLoading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(isAdmin.admin){
    return <Navigate to='/dashboard/salesview'></Navigate>
  }

  if(user && verify?.owner){
    return children;
  }

 

  return (
    <Navigate to='/createShop'></Navigate>
  );
};

export default OwnerRoutes;