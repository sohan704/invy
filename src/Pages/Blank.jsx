import { Navigate, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Blank = () => {
  const axiosPublic = UseAxiosPublic();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [adminInfo, setAdminInfo] = useState(null);

  useEffect(() => {

   

    axiosPublic.get(`/isOwner/${user?.email}`).then(res => setOwnerInfo(res.data));

    axiosPublic.get(`/checkAdmin/${user?.email}`).then(res => setAdminInfo(res.data));
  }, [])

  if(ownerInfo?.owner){
    return <Navigate to="/dashboard/addProduct"></Navigate>
  }

  return (
    <div>
      
    </div>
  );
};

export default Blank;