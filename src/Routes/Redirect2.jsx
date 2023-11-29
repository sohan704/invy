import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";
import UseAdmin from "../Hooks/UseAdmin";


const Redirect2 = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  // const [verify, owner_loading] = UseOwnerVerification();
  const [refetch, isAdminLoading, isAdmin] = UseAdmin();

//  console.log(verify);

  if(loading || isAdminLoading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(isAdmin.admin){
    return children;
  }

  if(user){
    return <Navigate to='/notAdmin'></Navigate>;
  }

  return (
    <Navigate to='/'></Navigate>
  );
};

export default Redirect2;