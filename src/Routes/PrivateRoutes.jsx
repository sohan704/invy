import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";
import UseAdmin from "../Hooks/UseAdmin";


const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  const [verify, owner_loading] = UseOwnerVerification();
  const [refetch, isAdminLoading, isAdmin] = UseAdmin();
 
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(verify?.owner){
    return <Navigate to='/dashboard/addProduct'></Navigate>
  }

  if(isAdmin?.admin){
    return <Navigate to='/dashboard/salesview'></Navigate>
  }

  if(user){
    return children;
  }

  return (
    <Navigate to='/login'></Navigate>
  );
};

export default PrivateRoutes;