import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";


const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  const [verify, owner_loading] = UseOwnerVerification();
 
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(verify?.owner){
    return <Navigate to='/dashboard/addProduct'></Navigate>
  }

  if(user){
    return children;
  }

  return (
    <Navigate to='/login'></Navigate>
  );
};

export default PrivateRoutes;