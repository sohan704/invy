import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Navigate } from "react-router-dom";
import UseOwnerVerification from "../Hooks/UseOwnerVerification";


const Redirect = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  const [verify, owner_loading] = UseOwnerVerification();
 console.log(verify);
  if(loading || owner_loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if(verify?.owner){
    return children;
  }

  if(user){
    return <Navigate to='/notOwner'></Navigate>;
  }

  return (
    <Navigate to='/'></Navigate>
  );
};

export default Redirect;